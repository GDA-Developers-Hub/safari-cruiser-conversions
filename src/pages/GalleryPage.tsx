import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

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
import bodyWorks from "@/assets/Body Works & Painting.jpeg";
import customizationLogos from "@/assets/Customization logos.jpeg";
import builtForWild from "@/assets/PK Conversions—built for the wild, branded for the bold..jpeg";
import autoRestoration from "@/assets/automotive restoration and conversion..jpeg";
import behindScenes from "@/assets/behind-the-scenes craftsmanship.jpeg";
import bespokeBodywork from "@/assets/bespoke bodywork process,.jpeg";
import fullyConverted from "@/assets/fully converted safari vehicle.jpeg";
import fullyOutfitted from "@/assets/fully outfitted expedition.jpeg";
import workshopHeart from "@/assets/heart of PK Conversions’ workshop.jpeg";
import passengerExp from "@/assets/passenger experience.jpeg";
import rawFabrication from "@/assets/raw fabrication phase.jpeg";
import showstopper from "@/assets/showstopper.jpeg";

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
  },
  {
    src: bodyWorks,
    title: "Professional Body Works & Painting",
    category: "Custom Work"
  },
  {
    src: customizationLogos,
    title: "Custom Branding & Logos",
    category: "Exterior Upgrades"
  },
  {
    src: builtForWild,
    title: "Built for the Wild - Branded for the Bold",
    category: "Completed Conversions"
  },
  {
    src: autoRestoration,
    title: "Automotive Restoration & Conversion",
    category: "Conversion Process"
  },
  {
    src: behindScenes,
    title: "Behind-the-Scenes Craftsmanship",
    category: "Our Facility"
  },
  {
    src: bespokeBodywork,
    title: "Bespoke Bodywork Process",
    category: "Custom Work"
  },
  {
    src: fullyConverted,
    title: "Fully Converted Safari Vehicle",
    category: "Conversion Results"
  },
  {
    src: fullyOutfitted,
    title: "Fully Outfitted Expedition Vehicle",
    category: "Adventure Vehicles"
  },
  {
    src: workshopHeart,
    title: "The Heart of Our Workshop",
    category: "Our Facility"
  },
  {
    src: passengerExp,
    title: "Premium Passenger Experience",
    category: "Interior Modifications"
  },
  {
    src: rawFabrication,
    title: "Raw Fabrication Phase",
    category: "Conversion Process"
  },
  {
    src: showstopper,
    title: "Showstopper Conversion",
    category: "Completed Conversions"
  }
];

const GalleryPage = () => {
  // Ensure the page is scrolled to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-background">
      <Navigation dark={true} />
      <div className="pt-24 pb-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-safari-brown hover:text-safari-gold transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>
            <h1 className="text-4xl font-bold text-foreground">
              Our <span className="text-safari-brown">Gallery</span>
            </h1>
            <div className="w-24"></div> {/* For alignment */}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-safari transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs text-safari-gold font-medium mb-1">
                      {image.category}
                    </p>
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
    </div>
  );
};

export default GalleryPage;
