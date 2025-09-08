import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import zoteImage from "@/assets/Zote.jpeg";
import heroWorkshop from "@/assets/hero-workshop.jpeg";
import heroSafari2 from "@/assets/hero-safari-2.jpeg";
import heroSafari3 from "@/assets/hero-safari-3.jpeg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: zoteImage,
      title: "PK CONVERSIONS",
      subtitle: "YOUR JOURNEY, YOUR VEHICLE, UNIQUELY CRAFTED"
    },
    {
      image: heroWorkshop,
      title: "BUILT FOR THE WILD",
      subtitle: "BRANDED FOR THE BOLD"
    },
    {
      image: heroSafari2,
      title: "ELEVATE YOUR SAFARI EXPERIENCE",
      subtitle: "CUSTOM VEHICLE CONVERSIONS FOR THE DISCERNING TRAVELER"
    },
    {
      image: heroSafari3,
      title: "PRECISION ENGINEERING",
      subtitle: "MEETS AFRICAN TERRAIN"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          animate={{ 
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1 : 1.05
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </motion.div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-primary-foreground px-4 max-w-4xl mx-auto">
          <motion.h1
            key={currentSlide}
            className="text-5xl md:text-7xl font-bold mb-6 text-safari-cream"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={`subtitle-${currentSlide}`}
            className="text-xl md:text-2xl mb-4 text-safari-gold font-light"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          <motion.div
            className="text-lg md:text-xl mb-8 text-safari-cream/90 font-medium italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Where Innovation Meets Craftsmanship
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-safari-brown hover:bg-safari-brown/90 text-safari-cream font-semibold px-8 py-3 rounded-full"
              onClick={() => scrollToSection("services")}
            >
              Explore Our Conversions
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-safari-gold text-safari-gold hover:bg-safari-gold hover:text-safari-brown font-semibold px-8 py-3 rounded-full"
              onClick={() => window.open("https://wa.me/254705302615", "_blank")}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 text-safari-cream transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 text-safari-cream transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-safari-gold" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;