"use client";
import React from 'react';

const AboutHeroSection = ( {head, text, image}) => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image} // Replace with the actual image path
          alt="Technician working on air conditioner"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {head}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium">
          {text}
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
