"use client";
import React, { useState } from 'react';

const AboutUsOurMission = () => {
  const [activeTab, setActiveTab] = useState('vision'); // no TypeScript syntax

  return (
    <section className="relative bg-neutral-200 text-black py-16 px-4 sm:px-8 md:px-20 text-center overflow-hidden">
      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* <h1 className="text-4xl font-bold mb-12 tracking-wide">GYANEE</h1> */}

        <div className="flex justify-center space-x-8 mb-6">
          <button
            className={`text-lg font-medium transition-all ${activeTab === 'mission'
              ? 'text-black border-b-2 border-black'
              : 'text-gray-500 hover:text-black'
              }`}
            onClick={() => setActiveTab('mission')}
          >
            Mission
          </button>
          <button
            className={`text-lg font-medium transition-all ${activeTab === 'vision'
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
            Our mission at <strong>GYANEE</strong> services is to deliver top-quality <strong>kitchen, electrical, power, solar, and home appliance</strong> products and services that make modern living more efficient and convenient. We are committed to ensuring every customer experiences reliability, comfort, and innovation through our wide range of solutions from sales to installation and maintenance.
          </p>
        ) : (
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Our vision is to establish <strong>GYANEE</strong> services as a trusted, one-stop destination for all home and power appliance needs. We aim to lead the market through excellence, integrity, and innovation empowering households with sustainable and smart solutions that bring lasting value and ease to everyday life.
          </p>
        )}
      </div>
    </section>
  );
};

export default AboutUsOurMission;
