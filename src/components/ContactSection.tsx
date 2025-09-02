import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Facebook, 
  Mail
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      icon: MapPin,
      title: "Visit Us",
      details: ["Mombasa Road", "Nairobi, Kenya"],
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

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-foreground">Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index} 
                  className={`hover:shadow-card transition-all ${
                    item.action ? 'cursor-pointer' : ''
                  }`}
                  onClick={item.action ? () => window.open(item.action, '_blank') : undefined}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-safari-brown rounded-full flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-safari-cream" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media & Actions */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-foreground">Connect With Us</h4>
              <div className="flex gap-4 mb-6">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-safari-brown text-safari-brown hover:bg-safari-brown hover:text-safari-cream"
                  onClick={() => window.open("https://www.facebook.com/peter.kamau.754/", "_blank")}
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
              </div>
              
              <div className="space-y-3">
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
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-safari-brown" />
                  Find Us on Mombasa Road
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7944181361786!2d36.8660000000000!3d-1.3028999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11b7e1c1c1c1%3A0x1c1c1c1c1c1c1c1c!2sMombasa%20Road%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PK Conversion Location"
                  />
                </div>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Easy to Find:</strong> Located on the busy Mombasa Road, 
                    one of Nairobi's main arterial roads.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Landmark:</strong> Near major automotive businesses and 
                    industrial areas for easy access.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

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