import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Mail
} from "lucide-react";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MapComponent from "@/components/MapComponent";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 705 302615", "Available 6 days a week"],
      action: "tel:+254705302615"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@pkconversion.co.ke", "For inquiries and quotes"],
      action: "mailto:info@pkconversion.co.ke"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Eastern Bypass", "Nairobi, Kenya"],
      action: "https://maps.app.goo.gl/RCBSk1WY5TFpZfPk9"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Saturday", "8:00 AM - 6:00 PM"],
      action: null
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["Quick Response", "Instant Quotes"],
      action: "https://wa.me/254705302615"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In <span className="text-safari-brown">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your vehicle into the perfect safari machine? 
            Contact us today for a consultation and personalized quote.
          </p>
        </motion.div>

        {/* Contact Information - Full Width */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Contact Information</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-card transition-all ${
                  item.action ? 'cursor-pointer' : ''
                }`}
                onClick={item.action ? () => window.open(item.action, '_blank') : undefined}
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 bg-safari-brown rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-safari-cream" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Client Testimonial */}
        <motion.div
          className="mt-16 bg-white/5 p-8 rounded-2xl border border-safari-green/20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-safari-green mr-4"></div>
              <h3 className="text-xl font-semibold text-safari-green">Client Testimonial</h3>
              <div className="w-12 h-1 bg-safari-green ml-4"></div>
            </div>
            <blockquote className="text-center mb-6">
              <p className="text-lg italic text-muted-foreground mb-4">
                "I've been working with PK Conversion for over 5 years now, and their attention to detail is unmatched. 
                They transformed my Land Cruiser into the perfect safari vehicle that has withstood the toughest terrains 
                of Masai Mara and Amboseli. Their craftsmanship and reliability make them the best in the business."
              </p>
              <footer className="font-medium text-safari-green">
                - Dickson Brightee Maasai,<br className="sm:hidden" /> 
                <span className="text-foreground">Safari Guide & Tour Operator</span>
              </footer>
            </blockquote>
          </div>
        </motion.div>

        {/* Philanthropic Work */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            <span className="text-safari-brown">Giving Back</span> to Our Community
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            At PK Conversion, we believe in supporting our local community. We're proud to contribute to various 
            conservation efforts and community development projects across Kenya, helping to preserve our beautiful 
            country for future generations.
          </p>
        </motion.div>

        <div className="my-16"></div> {/* Added space between sections */}

        {/* Social Media & Actions */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-6 text-foreground">Connect With Us</h4>
            <div className="flex flex-wrap justify-center gap-4 mb-8 w-full max-w-md mx-auto">
              <Button
                size="sm"
                variant="outline"
                className="border-safari-brown text-safari-brown hover:bg-safari-brown hover:text-safari-cream"
                onClick={() => window.open("https://www.facebook.com/peter.kamau.754/", "_blank")}
              >
                <FaFacebookF className="w-4 h-4 mr-2" />
                Facebook
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-safari-brown text-safari-brown hover:bg-safari-brown hover:text-safari-cream"
                onClick={() => window.open("https://www.tiktok.com/@pkconversions", "_blank")}
              >
                <FaTiktok className="w-4 h-4 mr-2" />
                TikTok
              </Button>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Button
                size="lg"
                className="w-full bg-safari-brown hover:bg-safari-brown/90 text-safari-cream"
                onClick={() => window.open("https://wa.me/254705302615", "_blank")}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Us Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-safari-gold text-safari-brown hover:bg-safari-gold hover:text-safari-brown"
                onClick={() => window.open("tel:+254705302615")}
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +254 705 302615
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-safari-green text-safari-green hover:bg-safari-green hover:text-white"
                onClick={() => window.open("mailto:info@pkconversion.co.ke")}
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-3">Find Us</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our workshop on Eastern Bypass in Nairobi. We're conveniently located 
              near major automotive businesses and industrial areas for easy access.
            </p>
          </div>
          
          <MapComponent 
            position={[-1.3029, 36.8660]}
            zoom={15}
            popupText="PK Conversions Workshop"
            showActions={true}
            className="w-full"
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center bg-gradient-safari rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-safari-cream">
            Start Your Safari Vehicle Project Today
          </h3>
          <p className="text-lg text-safari-gold mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust PK Conversion for their 
            safari vehicle needs. Let's discuss your vision and bring it to life.
          </p>
          <Button
            size="lg"
            className="bg-safari-cream hover:bg-safari-cream/90 text-safari-brown font-bold px-8 py-3 rounded-full"
            onClick={() => window.open("https://wa.me/254705302615", "_blank")}
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Get Your Free Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;