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
  Gauge
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const primaryServices = [
    {
      icon: Car,
      title: "Land Cruiser Safari Conversions",
      description: "Complete transformation of Land Cruisers into premium safari vehicles with pop-up roofs, enhanced visibility, and tourist-friendly modifications.",
      features: ["Pop-up roof installation", "Enhanced visibility windows", "Tourist seating configuration", "Safari-grade interior"]
    },
    {
      icon: Settings,
      title: "Custom Vehicle Modifications",
      description: "Tailored modifications to meet specific safari tour requirements, including specialized equipment installation and interior customization.",
      features: ["Custom seating arrangements", "Equipment mounting", "Storage solutions", "Electrical upgrades"]
    },
    {
      icon: Shield,
      title: "Suspension & Safety Upgrades",
      description: "Heavy-duty suspension systems and safety modifications designed for Kenya's challenging terrain and tourist transportation requirements.",
      features: ["Heavy-duty suspension", "Safety equipment installation", "Brake system upgrades", "Lighting enhancements"]
    }
  ];

  const additionalServices = [
    { icon: Wrench, title: "General Mechanical Repairs", description: "Complete automotive repair services" },
    { icon: Gauge, title: "Engine Diagnostics", description: "Advanced diagnostic and tuning services" },
    { icon: Camera, title: "Interior Modifications", description: "Custom interior design and installation" },
    { icon: MapPin, title: "Terrain Preparation", description: "Modifications for specific Kenyan terrains" }
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
            Our <span className="text-safari-brown">Specialized Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From complete safari conversions to precision mechanical work, we deliver excellence 
            in every service for Kenya's tourism and automotive industries.
          </p>
        </motion.div>

        {/* Primary Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {primaryServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-safari transition-all duration-300 border-l-4 border-l-safari-brown">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-safari rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-safari-cream" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-safari-gold rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            Additional <span className="text-safari-green">Services</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-all">
                <CardContent className="p-0">
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-safari-green" />
                  <h4 className="font-semibold mb-2 text-foreground">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
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