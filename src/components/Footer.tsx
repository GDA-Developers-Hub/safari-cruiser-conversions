import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Mail, 
  Facebook, 
  MessageCircle,
  MessageCircleMore
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
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4 text-safari-cream" />
              </button>
              <button
                onClick={() => window.open("https://wa.me/254705302615", "_blank")}
                className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.498 14.382v-.002c-.301-.15-1.758-.867-2.03-.966-.273-.1-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.27-.465-2.42-1.485-.89-.795-1.484-1.77-1.66-2.07-.17-.29-.018-.449.13-.592.136-.133.297-.345.445-.525.146-.181.193-.301.296-.496.1-.21.049-.375-.025-.524-.075-.15-.673-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.01-.571-.01-.2 0-.523.074-.797.359-.273.3-1.05 1.02-1.05 2.475s1.07 2.865 1.219 3.075c.15.195 2.1 3.195 5.1 4.485.714.3 1.27.48 1.704.63.714.227 1.36.195 1.87.12.574-.09 1.758-.719 2.006-1.426.248-.705.248-1.29.18-1.42-.07-.12-.27-.195-.57-.345m-5.448 7.113h-.016a9.87 9.87 0 01-5.031-1.38l-.36-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.3A11.815 11.815 0 0012.05 0C5.496 0 .16 5.335.157 11.892c0 2.096.55 4.14 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.723 1.465h.006c6.554 0 11.89-5.335 11.89-11.89 0-3.18-1.258-6.196-3.54-8.473z"/>
                </svg>
              </button>
              <button
                onClick={() => window.open("https://www.tiktok.com/@jordansgarage23/video/7542280007905725704", "_blank")}
                className="p-2 bg-black rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Follow us on TikTok"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
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
                  <p className="text-safari-cream/80 text-sm">Eastern Bypass</p>
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