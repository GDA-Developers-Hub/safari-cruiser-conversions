import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { X, ZoomIn, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import all images from assets
import heroSafari1 from "@/assets/hero-safari-1.jpeg";
import heroSafari2 from "@/assets/hero-safari-2.jpeg";
import heroSafari3 from "@/assets/hero-safari-3.jpeg";
import heroWorkshop from "@/assets/hero-workshop.jpeg";
import conversionBefore from "@/assets/conversion-before.jpeg";
import customAfter from "@/assets/custom_after.jpeg";
import interiorConversion from "@/assets/interior-conversion.jpg";
import workshop from "@/assets/workshop.jpeg";
import vehicleBody from "@/assets/vehicle body fabrication.jpeg";
import newFaceKit from "@/assets/New face kit.jpeg";
import interiorCustomization from "@/assets/Interior Customization.jpeg";
import bushTruck from "@/assets/bush truck.jpeg";
import expeditionRig from "@/assets/expedition rig conversion..jpeg";
import offRoadExhibition from "@/assets/4x4 off-road exhibition.jpeg";

// Define the gallery images with local imports
const galleryImages = [
  {
    src: heroSafari1,
    title: "Safari Land Cruiser in Action",
    category: "Completed Conversions"
  },
  {
    src: heroSafari2,
    title: "Tourist Safari Experience",
    category: "Client Success"
  },
  {
    src: heroSafari3,
    title: "Safari Adventure",
    category: "Adventure Tours"
  },
  {
    src: heroWorkshop,
    title: "Professional Workshop",
    category: "Our Facility"
  },
  {
    src: conversionBefore,
    title: "Before Conversion",
    category: "Conversion Process"
  },
  {
    src: customAfter,
    title: "After Customization",
    category: "Conversion Results"
  },
  {
    src: interiorConversion,
    title: "Custom Interior Design",
    category: "Interior Modifications"
  },
  {
    src: workshop,
    title: "Our Workshop",
    category: "Facility"
  },
  {
    src: vehicleBody,
    title: "Vehicle Body Fabrication",
    category: "Custom Work"
  },
  {
    src: newFaceKit,
    title: "New Face Kit Installation",
    category: "Exterior Upgrades"
  },
  {
    src: interiorCustomization,
    title: "Interior Customization",
    category: "Luxury Interiors"
  },
  {
    src: bushTruck,
    title: "Bush Truck Conversion",
    category: "Off-Road Builds"
  },
  {
    src: expeditionRig,
    title: "Expedition Rig Conversion",
    category: "Adventure Vehicles"
  },
  {
    src: offRoadExhibition,
    title: "4x4 Off-Road Exhibition",
    category: "Showcase Events"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

        {/* Stats */}
        <motion.div
          className="grid sm:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="p-6">
            <h3 className="text-4xl font-bold text-safari-brown mb-2">1000+</h3>
            <p className="text-muted-foreground font-medium">Vehicles Converted</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-safari-green mb-2">98%</h3>
            <p className="text-muted-foreground font-medium">Customer Satisfaction</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-safari-gold mb-2">15+</h3>
            <p className="text-muted-foreground font-medium">Years Experience</p>
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
    </section>
  );
};

export default GallerySection;