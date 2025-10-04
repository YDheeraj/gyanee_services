"use client";
import React, { useState } from 'react';

const AboutUsOurMission = () => {
  const [activeTab, setActiveTab] = useState('vision'); // no TypeScript syntax

  return (
    <section className="relative bg-yellow-200 text-black py-16 px-4 sm:px-8 md:px-20 text-center overflow-hidden">
      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 tracking-wide">GYANEE</h1>

        <div className="flex justify-center space-x-8 mb-6">
          <button
            className={`text-lg font-medium transition-all ${
              activeTab === 'mission'
                ? 'text-black border-b-2 border-black'
                : 'text-gray-500 hover:text-black'
            }`}
            onClick={() => setActiveTab('mission')}
          >
            Mission
          </button>
          <button
            className={`text-lg font-medium transition-all ${
              activeTab === 'vision'
                ? 'text-black border-b-2 border-black'
                : 'text-gray-500 hover:text-black'
            }`}
            onClick={() => setActiveTab('vision')}
          >
            Vision
          </button>
        </div>

        {activeTab === 'mission' ? (
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Our mission is to provide fast, reliable, and affordable home appliance repair services with a focus on quality, customer satisfaction, and trust.
          </p>
        ) : (
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Our vision is to become the most trusted and accessible home appliance repair service,
            known for our exceptional customer care and expertise. We strive to be the go-to
            choice for homeowners, offering quick and dependable solutions that make life easier,
            one appliance at a time.
          </p>
        )}
      </div>
    </section>
  );
};

export default AboutUsOurMission;
