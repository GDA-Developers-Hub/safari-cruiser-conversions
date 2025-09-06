import React from 'react';
import zoteImage from '@/assets/Zote.jpeg';

const WelcomeSection = () => {
  return (
    <section id="welcome" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <img
                src={zoteImage}
                alt="PK Conversions Showcase"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Our World of Excellence</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              At PK Conversions, we transform vehicles into extraordinary assets. From custom van conversions to flawless body repairs and showroom-quality paint jobs, we combine technical precision with creative vision to bring your automotive dreams to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
