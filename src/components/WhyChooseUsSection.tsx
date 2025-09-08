import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Shield, 
  Star, 
  MapPin, 
  DollarSign, 
  Users, 
  Trophy,
  CheckCircle,
  Clock
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Shield,
      title: "Quality Craftsmanship",
      description: "Over 8 years of expertise in safari vehicle modifications with attention to every detail.",
      color: "text-safari-brown"
    },
    {
      icon: MapPin,
      title: "Local Kenyan Expertise", 
      description: "Deep understanding of Kenya's diverse terrain and safari requirements.",
      color: "text-safari-green"
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Fair, transparent pricing with no hidden costs. Quality work at honest prices.",
      color: "text-safari-gold"
    },
    {
      icon: Users,
      title: "Tourist-Focused Design",
      description: "Every modification prioritizes tourist comfort and unforgettable safari experiences.",
      color: "text-safari-brown"
    }
  ];


  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Safari Operators <span className="text-safari-brown">Choose Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've earned the trust of Kenya's leading safari operators through consistent 
            quality, reliability, and deep understanding of the tourism industry.
          </p>
        </motion.div>

        {/* Main Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center p-6 h-full hover:shadow-card transition-all">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center`}>
                    <reason.icon className={`w-8 h-8 ${reason.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-16 bg-gradient-safari rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-safari-cream">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-safari-gold mb-8 max-w-2xl mx-auto">
            Experience the PK Conversion difference. Let us transform your Land Cruiser 
            into the ultimate safari vehicle that your guests will never forget.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-safari-cream">
            <span className="px-6 py-2 bg-white/20 rounded-full">8+ Years Proven Track Record</span>
            <span className="px-6 py-2 bg-white/20 rounded-full">500+ Satisfied Clients</span>
            <span className="px-6 py-2 bg-white/20 rounded-full">Quality Guaranteed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;