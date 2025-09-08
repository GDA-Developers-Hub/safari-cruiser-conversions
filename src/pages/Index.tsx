import React from "react";
import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import WelcomeSection from "@/components/WelcomeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";

const Index = () => {

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO page="homepage" />
      <Navigation />
      
      <main>
        <section id="hero">
          <HeroSlider />
        </section>
        
        <WelcomeSection />
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
