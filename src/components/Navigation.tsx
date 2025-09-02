import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import pkLogo from "@/assets/pk logo.jpeg";

interface NavigationProps {
  dark?: boolean;
}

const Navigation = ({ dark = false }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(dark);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (!window.location.pathname.endsWith('/')) {
      // Navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    } else {
      // We're already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || dark
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img 
              src={pkLogo} 
              alt="PK Conversion Ltd" 
              className="w-12 h-10 object-cover rounded-full shadow-sm border-2 border-safari-gold"
            />
            <div className="ml-3">
              <h2 className={`font-bold text-lg ${isScrolled || dark ? 'text-foreground' : 'text-white'}`}>PK Conversion</h2>
              <p className={`text-xs ${isScrolled || dark ? 'text-safari-gold' : 'text-white'}`}>Safari Specialists</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`${isScrolled || dark ? 'text-foreground' : 'text-white'} hover:text-safari-brown transition-colors font-medium`}
              >
                {item.name}
              </button>
            ))}
            <Button
              size="sm"
              className={`${isScrolled ? 'bg-safari-brown' : 'bg-safari-gold text-safari-brown hover:bg-safari-gold/90'} hover:bg-safari-brown/90 text-safari-cream`}
              onClick={() => window.open("https://wa.me/254705302615", "_blank")}
            >
              <Phone className="mr-2 w-4 h-4" />
              +254 705 302615
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${isScrolled || dark ? 'text-foreground' : 'text-white'}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? "auto" : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 bg-background/95 backdrop-blur-md border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-safari-brown transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="px-4">
              <Button
                size="sm"
                className="w-full bg-safari-brown hover:bg-safari-brown/90 text-safari-cream"
                onClick={() => window.open("https://wa.me/254705302615", "_blank")}
              >
                <Phone className="mr-2 w-4 h-4" />
                Call +254 705 302615
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;