import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, ZoomIn, ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

import galleryImages from "@/data/galleryImages";

// Import videos from assets
import video1 from "@/assets/vedio1.mp4";
import video2 from "@/assets/video3.mp4";
import video3 from "@/assets/video3.mp4";
import video4 from "@/assets/video4.mp4";

// Define the preview videos
const previewVideos = [
  {
    src: video1,
    title: "Workshop Process",
    category: "Behind the Scenes",
    description: "Watch our skilled craftsmen transform vehicles into safari cruisers"
  },
  {
    src: video2,
    title: "Vehicle Transformation",
    category: "Conversion Process",
    description: "See the complete before and after transformation process"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{src: string; title: string; category: string; description: string} | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  // Show only first 6 images in the preview
  const previewImages = galleryImages.slice(0, 6);

  // Handle view more click
  const handleViewMore = () => {
    navigate('/gallery');
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-safari-brown">Work Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of premium safari vehicle conversions and see the 
            craftsmanship that sets us apart in Kenya's automotive industry.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-safari transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-safari-gold font-medium mb-1">
                    {image.category}
                  </p>
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {image.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleViewMore}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-safari-brown hover:bg-safari-brown/90 transition-colors"
          >
            View Full Gallery
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Videos Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-3">Watch Our Process</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See our skilled craftsmen in action as they transform vehicles into exceptional safari cruisers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {previewVideos.map((video, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-safari transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
                onClick={() => setSelectedVideo(video)}
              >
                <div className="aspect-video bg-gradient-to-br from-safari-brown to-safari-gold flex items-center justify-center relative">
                  <div className="text-center text-white z-10">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 ml-1" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{video.title}</h4>
                    <p className="text-sm opacity-90">{video.category}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs text-safari-gold font-medium mb-1">
                      {video.category}
                    </p>
                    <h3 className="text-white font-semibold text-lg leading-tight mb-2">
                      {video.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {video.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={handleViewMore}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-safari-brown hover:bg-safari-brown/90 transition-colors mb-4"
            >
              View All in Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <p className="text-muted-foreground text-sm">
              More videos coming soon! Follow us on social media for updates.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video">
                <video
                  src={selectedVideo.src}
                  controls
                  className="w-full h-full object-cover"
                  poster=""
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-safari-gold text-sm font-medium mb-3">
                  {selectedVideo.category}
                </p>
                <p className="text-muted-foreground">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;