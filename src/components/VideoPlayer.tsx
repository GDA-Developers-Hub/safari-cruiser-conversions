import React, { useRef, useEffect, useState } from 'react';
import { VIDEO_CONFIG, optimizeVideoLoading, handleVideoError } from '@/utils/videoUtils';

interface VideoPlayerProps {
  src: string;
  title?: string;
  className?: string;
  poster?: string;
  fallbackSrc?: string;
  onError?: () => void;
  onLoad?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  title,
  className = "w-full h-full object-cover",
  poster,
  fallbackSrc,
  onError,
  onLoad
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Optimize video loading
    optimizeVideoLoading(video);

    // Handle loading states
    const handleLoadStart = () => {
      setIsLoading(true);
      setHasError(false);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      onLoad?.();
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
      handleVideoError(video, fallbackSrc);
      onError?.();
    };

    // Add event listeners
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [src, fallbackSrc, onError, onLoad]);

  if (hasError && !fallbackSrc) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-100 text-gray-500`}>
        <div className="text-center">
          <p className="text-sm">Video temporarily unavailable</p>
          <p className="text-xs mt-1">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 ${className} flex items-center justify-center bg-gray-100`}>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-safari-gold"></div>
        </div>
      )}
      <video
        ref={videoRef}
        src={src}
        {...VIDEO_CONFIG}
        className={className}
        poster={poster}
        style={{ opacity: isLoading ? 0 : 1 }}
        title={title}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
