import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="hero">
          <HeroSlider />
        </section>
        
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
