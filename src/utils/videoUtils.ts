// Video utility functions for better cross-platform compatibility

export interface VideoConfig {
  src: string;
  title: string;
  category: string;
  description: string;
  fallbackSrc?: string;
  poster?: string;
}

// Video optimization settings
export const VIDEO_CONFIG = {
  // Enable preload for better performance
  preload: 'metadata' as const,
  // Add loading attribute for better performance
  loading: 'lazy' as const,
  // Enable controls
  controls: true,
  // Add playsinline for mobile compatibility
  playsInline: true,
  // Add muted for autoplay compatibility
  muted: false,
};

// Function to handle video loading errors
export const handleVideoError = (videoElement: HTMLVideoElement, fallbackSrc?: string) => {
  console.warn('Video failed to load:', videoElement.src);
  
  if (fallbackSrc) {
    videoElement.src = fallbackSrc;
    videoElement.load();
  } else {
    // Hide the video element and show an error message
    videoElement.style.display = 'none';
    const errorDiv = document.createElement('div');
    errorDiv.className = 'flex items-center justify-center h-full bg-gray-100 text-gray-500';
    errorDiv.innerHTML = `
      <div class="text-center">
        <p class="text-sm">Video temporarily unavailable</p>
        <p class="text-xs mt-1">Please try again later</p>
      </div>
    `;
    videoElement.parentNode?.insertBefore(errorDiv, videoElement);
  }
};

// Function to optimize video loading
export const optimizeVideoLoading = (videoElement: HTMLVideoElement) => {
  // Add error handling
  videoElement.addEventListener('error', () => handleVideoError(videoElement));
  
  // Add loading optimization
  videoElement.addEventListener('loadstart', () => {
    videoElement.style.opacity = '0.7';
  });
  
  videoElement.addEventListener('canplay', () => {
    videoElement.style.opacity = '1';
  });
  
  // Add intersection observer for lazy loading
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.load();
          observer.unobserve(videoElement);
        }
      });
    });
    
    observer.observe(videoElement);
  }
};

// Function to get video dimensions for responsive design
export const getVideoDimensions = (videoElement: HTMLVideoElement) => {
  return {
    width: videoElement.videoWidth,
    height: videoElement.videoHeight,
    aspectRatio: videoElement.videoWidth / videoElement.videoHeight
  };
};
