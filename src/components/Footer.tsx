import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Mail, 
  Facebook, 
  MessageCircle 
} from "lucide-react";
import pkLogo from "@/assets/pk logo.jpeg";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", id: "hero" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" }
  ];

  const services = [
    "Safari Vehicle Conversions",
    "Pop-up Roof Installation", 
    "Interior Modifications",
    "Mechanical Repairs",
    "Suspension Upgrades"
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <img 
                src={pkLogo} 
                alt="PK Conversion Ltd" 
                width={48}
                height={40}
                className="object-contain rounded-md shadow-sm"
              />
              <div className="ml-3">
                <h3 className="font-bold text-lg text-safari-cream">PK Conversion</h3>
                <p className="text-xs text-safari-gold">Safari Specialists</p>
              </div>
            </div>
            <p className="text-safari-cream/80 text-sm leading-relaxed mb-4">
              Kenya's premier safari vehicle conversion specialists. Transforming 
              Land Cruisers into exceptional safari experiences since 2008.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => window.open("https://www.facebook.com/peter.kamau.754/", "_blank")}
                className="p-2 bg-safari-brown rounded-full hover:bg-safari-brown/80 transition-colors"
              >
                <Facebook className="w-4 h-4 text-safari-cream" />
              </button>
<button
                onClick={() => window.open("https://wa.me/254705302615", "_blank")}
                className="p-2 bg-safari-gold rounded-full hover:bg-safari-gold/80 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-safari-brown" />
              </button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-safari-cream">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-safari-cream/80 hover:text-safari-gold transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-safari-cream">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-safari-cream/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-safari-cream">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-safari-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-safari-cream/80 text-sm">Mombasa Road</p>
                  <p className="text-safari-cream/80 text-sm">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-safari-gold flex-shrink-0" />
                <a 
                  href="tel:+254705302615"
                  className="text-safari-cream/80 hover:text-safari-gold transition-colors text-sm"
                >
                  +254 705 302615
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-safari-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-safari-cream/80 text-sm">Monday - Saturday</p>
                  <p className="text-safari-cream/80 text-sm">8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-safari-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-safari-cream/60 text-sm text-center md:text-left">
            <p>&copy; 2024 PK Conversion Ltd. All rights reserved.</p>
            <p className="mt-1">
              Transforming vehicles, creating adventures across Kenya.
            </p>
          </div>
          <div className="flex gap-6 text-xs text-safari-cream/60">
            <button className="hover:text-safari-gold transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-safari-gold transition-colors">
              Terms of Service
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;