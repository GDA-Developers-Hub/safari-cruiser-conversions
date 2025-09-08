import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Car, 
  Settings, 
  Shield, 
  Wrench, 
  Camera, 
  MapPin,
  Users,
  Gauge,
  Image as ImageIcon,
  BatteryFull,
  CarFront,
  ShieldCheck,
  Package,
  Snowflake,
  Sofa,
  PanelRight,
  Sun
} from "lucide-react";
import detachableWindows from "@/assets/detachable windows frame.jpeg";
import mahoganyFrame from "@/assets/fixed mahogany fitted canvas frame.jpeg";
import fixedSlidingWindows from "@/assets/fixed sliding windows.jpeg";
import openGameTourVan from "@/assets/OPEN GAME TOUR VAN.jpeg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ service, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <Card className={`h-full flex flex-col bg-gradient-to-b from-background to-muted/30 hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-safari-green/30 ${service.large ? 'lg:col-span-2' : ''}`}>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className={`w-full ${service.large ? 'h-64' : 'h-48'} mb-4 overflow-hidden rounded-lg`}>
          {service.image ? (
            <img 
              src={
                service.image.includes('detachable') ? detachableWindows :
                service.image.includes('mahogany') ? mahoganyFrame :
                service.image.includes('sliding') ? fixedSlidingWindows :
                openGameTourVan
              } 
              alt={service.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-safari-green/10 flex items-center justify-center rounded-lg">
              <service.icon className="w-12 h-12 text-safari-green" />
            </div>
          )}
        </div>
        <h4 className="text-lg font-semibold mb-2 text-foreground">
          {service.title}
        </h4>
        <p className="text-muted-foreground text-sm mb-3">
          {service.description}
        </p>
        {service.caption && (
          <p className="text-xs text-safari-green/80 italic mt-auto">
            {service.caption}
          </p>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Main Conversion Designs (previously in additional services)
  const conversionDesigns = [
    { 
      icon: Settings,
      title: "Detachable Windows System",
      description: "Innovative window solutions for ultimate flexibility",
      image: "detachable windows frame.jpeg",
      caption: "This design comes with a detachable window frame + a fully fitted canvas frame for exchange when needed. Its rear passenger doors are winding window panes."
    },
    { 
      icon: Settings,
      title: "Mahogany Canvas Frame",
      description: "Elegant fixed frame with premium finish",
      image: "fixed mahogany fitted canvas frame.jpeg",
      caption: "This design comes with fixed canvas frame. The outline of the frame is made of clear vanished mahogany giving it its beautiful finished look. This design is suitable for game drives as its wide enough to allow spectacular views."
    },
    { 
      icon: Settings,
      title: "Fixed Sliding Windows",
      description: "Versatile window configuration for passenger comfort",
      image: "fixed sliding windows.jpeg",
      caption: "This design has its rear passenger windows fixed and either sliding or winding windows on its passenger rear doors.",
      large: true
    },
    { 
      icon: Car,
      title: "Open Game Tour Van",
      description: "Specialized design for optimal game viewing experiences",
      image: "OPEN GAME TOUR VAN.jpeg",
      caption: "This design consists of metal pipes and canvas canopy. As its name suggests, it's suitable for open game viewing in bush safaris. It also consists of clear vanished mahogany on the bases and arm rests to ensure clients' comfort and easy photography.",
      large: true
    }
  ];

  // Additional Services
  const additionalServices = [
    {
      icon: Wrench,
      title: "Modifications",
      description: "Custom modifications to suit your specific needs and preferences"
    },
    {
      icon: Shield,
      title: "Restorations & Refurbishment",
      description: "Complete restoration of vehicles to their former glory"
    },
    {
      icon: ImageIcon,
      title: "Repainting",
      description: "Professional automotive painting with premium finishes"
    },
    {
      icon: Wrench,
      title: "Body Repairs",
      description: "Expert bodywork and structural repairs"
    }
  ];

  // Accessories
  const accessories = [
    { name: "Bull Bars", icon: ShieldCheck },
    { name: "Roof Racks/Carriers", icon: Package },
    { name: "Sump Guards", icon: Shield },
    { name: "Tyre Racks", icon: CarFront },
    { name: "Fridge Brackets", icon: Snowflake },
    { name: "Seat Covers", icon: Sofa },
    { name: "Side Steps", icon: PanelRight },
    { name: "Spot Lights", icon: Sun }
  ];

  return (
    <section id="services" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-safari-green">Comprehensive Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specializing in Land Cruiser conversions and modifications for the African terrain, 
            we provide end-to-end solutions for safari operators and overland adventurers.
          </p>
        </motion.div>

        {/* Conversion Designs */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our <span className="text-safari-green">Conversion Designs</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {conversionDesigns.map((service, index) => (
              <ServiceCard key={`design-${index}`} service={service} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>

        {/* Additional Services */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our <span className="text-safari-green">Services</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={`service-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full flex flex-col bg-gradient-to-b from-background to-muted/30 hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-safari-green/30">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-safari-green/10 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-safari-green" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Accessories */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Available <span className="text-safari-green">Accessories</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {accessories.map((item, index) => (
              <motion.div
                key={`accessory-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.05) }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full flex flex-col items-center justify-center p-6 text-center hover:shadow-md transition-all duration-300 border border-border/50 hover:border-safari-green/30">
                  <div className="w-12 h-12 bg-safari-green/10 rounded-full flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-safari-green" />
                  </div>
                  <h4 className="font-medium text-foreground">{item.name}</h4>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-muted/50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Transform Your Vehicle?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a consultation and quote. Our team will work with you to create 
            the perfect safari vehicle for your tourism business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-safari-brown hover:bg-safari-brown/90 text-safari-cream px-8"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Users className="mr-2 w-5 h-5" />
              Get Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-safari-gold text-safari-brown hover:bg-safari-gold hover:text-safari-brown px-8"
              onClick={() => window.open("https://wa.me/254705302615", "_blank")}
            >
              WhatsApp Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;