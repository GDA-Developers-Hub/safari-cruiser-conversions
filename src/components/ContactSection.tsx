import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Mail,
  PhoneCall,
  Mail as MailIcon
} from "lucide-react";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import MapComponent from "@/components/MapComponent";

interface ContactCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string | string[];
  action?: string | null;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  action
}) => {
  const content = (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center h-full transition-all duration-300 hover:shadow-lg">
      <div className="w-16 h-16 rounded-full bg-safari-gold/10 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-safari-gold" />
      </div>
      <h3 className="text-lg font-bold text-safari-brown mb-2">{title}</h3>
      <div className="space-y-1">
        {Array.isArray(description) ? (
          description.map((line, i) => (
            <p key={i} className="text-safari-brown/80 text-sm">{line}</p>
          ))
        ) : (
          <p className="text-safari-brown/80 text-sm">{description}</p>
        )}
      </div>
    </div>
  );

  if (!action) return content;
  
  return (
    <a 
      href={action} 
      target="_blank" 
      rel="noopener noreferrer"
      className="no-underline block h-full"
    >
      <motion.div whileHover={{ y: -5 }}>
        {content}
      </motion.div>
    </a>
  );
};

const ContactSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: PhoneCall,
      title: "Call Us",
      description: ["+254 705 302615", "Available 6 days a week"],
      action: "tel:+254705302615"
    },
    {
      icon: MailIcon,
      title: "Email Us",
      description: ["info@pkconversion.co.ke", "For inquiries and quotes"],
      action: "mailto:info@pkconversion.co.ke"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: ["Eastern Bypass", "Nairobi, Kenya"],
      action: "https://maps.app.goo.gl/RCBSk1WY5TFpZfPk9"
    },
    {
      icon: Clock,
      title: "Working Hours",
      description: ["Monday - Saturday", "8:00 AM - 6:00 PM"],
      action: null
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: ["Quick Response", "Instant Quotes"],
      action: "https://wa.me/254705302615"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-safari-cream" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-safari-brown mb-4">
            Contact Information
          </h2>
          <div className="w-20 h-1 bg-safari-gold mx-auto mb-6"></div>
          <p className="text-safari-brown/80 max-w-3xl mx-auto">
            Reach out to us through any of these channels. Our team is ready to assist you with your vehicle conversion needs.
          </p>
        </motion.div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {contactInfo.map((item, index) => (
            <ContactCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              action={item.action}
            />
          ))}
        </div>

        {/* Social Media & Actions */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-safari-brown mb-8">Connect With Us</h2>
          
          {/* Social Media Buttons Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant="outline"
              className="px-6 py-2 rounded-lg border-safari-brown text-safari-brown hover:bg-safari-brown/10 transition-all duration-200 shadow-sm"
              onClick={() => window.open("https://www.facebook.com/peter.kamau.754/", "_blank")}
            >
              <FaFacebookF className="w-5 h-5 mr-2" />
              Facebook
            </Button>
            <Button
              variant="outline"
              className="px-6 py-2 rounded-lg border-safari-brown text-safari-brown hover:bg-safari-brown/10 transition-all duration-200 shadow-sm"
              onClick={() => window.open("https://www.tiktok.com/@pkconversions", "_blank")}
            >
              <FaTiktok className="w-5 h-5 mr-2" />
              TikTok
            </Button>
          </div>
          
          {/* Action Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WhatsApp Button - Full width on mobile, half on desktop */}
            <Button
              size="lg"
              className="w-full bg-safari-brown hover:bg-safari-brown/90 text-white py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              onClick={() => window.open("https://wa.me/254705302615", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us Now
            </Button>
            
            {/* Call Button - Full width on mobile, half on desktop */}
            <Button
              size="lg"
              variant="outline"
              className="w-full border-safari-gold text-safari-brown hover:bg-safari-gold/10 py-6 rounded-xl shadow-sm hover:shadow transition-all duration-200"
              onClick={() => window.open("tel:+254705302615")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +254 705 302615
            </Button>
            
            {/* Email Button - Full width */}
            <div className="sm:col-span-2">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-safari-green text-safari-green hover:bg-safari-green/10 py-6 rounded-xl shadow-sm hover:shadow transition-all duration-200"
                onClick={() => window.open("mailto:info@pkconversion.co.ke")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </div>
            </div>
          </div>

        {/* Map Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-safari-brown mb-3">Find Us</h3>
            <p className="text-safari-brown/80 max-w-2xl mx-auto">
              Visit our workshop on Eastern Bypass in Nairobi. We're conveniently located 
              near major automotive businesses and industrial areas for easy access.
            </p>
          </div>
          
          <MapComponent 
            position={[-1.3029, 36.8660]}
            zoom={15}
            popupText="PK Conversions Workshop"
            showActions={true}
            className="w-full h-96 rounded-xl overflow-hidden shadow-lg"
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center bg-gradient-to-r from-safari-gold to-safari-brown rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Start Your Safari Vehicle Project Today
          </h3>
          <p className="text-lg text-safari-cream/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust PK Conversion for their 
            safari vehicle needs. Let's discuss your vision and bring it to life.
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-safari-brown font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open("https://wa.me/254705302615", "_blank")}>
            <MessageCircle className="mr-2 w-5 h-5" />
            Get Your Free Quote
          </Button>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          className="mt-16 py-12 bg-white rounded-2xl shadow-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-safari-brown text-center mb-12">What Our Clients Say</h3>
            
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              <div className="bg-safari-cream/30 p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-2xl">★★★★★</div>
                </div>
                <p className="text-safari-brown/90 mb-4 italic">
                  "I've been working with PK Conversions for over 5 years now, and their attention to detail is unmatched. They transformed my Land Cruiser into the perfect safari vehicle that has withstood the toughest terrains of Masai Mara and Amboseli. Their craftsmanship and reliability make them the best in the business the payments plans are direct and transperant."
                </p>
                <p className="font-medium text-safari-brown">– Dickson Brightee Maasai, Safari Guide & Tour Director</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;