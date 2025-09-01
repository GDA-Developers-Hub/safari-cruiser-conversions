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
      description: "Over 15 years of expertise in safari vehicle modifications with attention to every detail.",
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

  const testimonials = [
    {
      name: "Safari Dreams Ltd",
      role: "Tour Operator",
      quote: "PK Conversion transformed our Land Cruisers into the perfect safari vehicles. Our clients love the comfort and visibility.",
      rating: 5
    },
    {
      name: "Kenya Wildlife Tours",
      role: "Safari Company", 
      quote: "Professional service, quality work, and deep understanding of tourism needs. Highly recommended!",
      rating: 5
    },
    {
      name: "Adventure Kenya",
      role: "Travel Agency",
      quote: "The pop-up roof installations are excellent. Our guides and tourists are extremely satisfied.",
      rating: 5
    }
  ];

  const achievements = [
    { icon: Trophy, number: "500+", label: "Happy Clients" },
    { icon: CheckCircle, number: "1000+", label: "Successful Conversions" },
    { icon: Star, number: "98%", label: "Satisfaction Rate" },
    { icon: Clock, number: "15+", label: "Years Experience" }
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

        {/* Achievements */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-6">
              <achievement.icon className="w-12 h-12 mx-auto mb-4 text-safari-brown" />
              <h3 className="text-3xl font-bold text-safari-brown mb-2">{achievement.number}</h3>
              <p className="text-muted-foreground font-medium">{achievement.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            What Our <span className="text-safari-green">Clients Say</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-safari-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-safari-brown">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-16 bg-gradient-safari rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-safari-cream">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-safari-gold mb-8 max-w-2xl mx-auto">
            Experience the PK Conversion difference. Let us transform your Land Cruiser 
            into the ultimate safari vehicle that your guests will never forget.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-safari-cream">
            <span className="px-6 py-2 bg-white/20 rounded-full">15+ Years Proven Track Record</span>
            <span className="px-6 py-2 bg-white/20 rounded-full">500+ Satisfied Clients</span>
            <span className="px-6 py-2 bg-white/20 rounded-full">Quality Guaranteed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;