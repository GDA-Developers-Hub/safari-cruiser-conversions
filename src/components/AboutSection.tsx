import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Wrench, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Satisfied Clients" },
    { icon: Wrench, number: "1000+", label: "Conversions Done" },
    { icon: MapPin, number: "100%", label: "Kenyan Expertise" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-safari-brown">PK Conversion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leading Kenya's safari vehicle conversion industry since 2008. We specialize in transforming 
            Land Cruisers into premium safari vehicles for the tourism industry.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At PK Conversion Ltd, we're passionate about creating exceptional safari experiences 
              through expert vehicle modifications. Located on Eastern Bypass, Nairobi, we've been 
              serving Kenya's tourism industry with premium Land Cruiser conversions that withstand 
              the country's diverse terrain.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of skilled mechanics and craftsmen understand the unique requirements of 
              safari tourism. Every conversion is designed with safety, comfort, and durability 
              in mind, ensuring unforgettable adventures across Kenya's national parks and reserves.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 shadow-card hover:shadow-safari transition-all">
                <CardContent className="p-0">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-safari-brown" />
                  <h4 className="text-3xl font-bold mb-2 text-safari-brown">{stat.number}</h4>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-safari rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-safari-cream">
            Why Safari Operators Choose Us
          </h3>
          <p className="text-lg text-safari-gold mb-6 max-w-3xl mx-auto">
            We understand Kenya's terrain like no other. Our conversions are built to handle everything 
            from Maasai Mara's plains to Samburu's rocky landscapes, ensuring your guests experience 
            the best of Kenya's wildlife in comfort and safety.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-safari-cream">
            <span className="px-4 py-2 bg-white/20 rounded-full">Local Expertise</span>
            <span className="px-4 py-2 bg-white/20 rounded-full">Quality Craftsmanship</span>
            <span className="px-4 py-2 bg-white/20 rounded-full">Tourism Focused</span>
            <span className="px-4 py-2 bg-white/20 rounded-full">Reliable Service</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;