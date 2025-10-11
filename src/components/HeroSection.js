"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Wrench, Zap, Plug, Droplets } from "lucide-react";
import AppointmentForm from "./AppointmentForm";

const HeroSection = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const services = [
    {
      title: "Kitchen Appliances",
      description: "Chimney, Hob, Mixer, Induction & more",
      icon: <Wrench className="w-9 h-9 text-black" />,
      link: "/services/kitchen-appliances",
    },
    {
      title: "Power Electronics",
      description: "Inverter, Battery, Solar Panel, UPS",
      icon: <Zap className="w-9 h-9 text-black" />,
      link: "/services/power-electronics",
    },
    {
      title: "Electrical Appliances",
      description: "Pump, Fan, Heater, Wiring, Air Cooler",
      icon: <Plug className="w-9 h-9 text-black" />,
      link: "/services/electrical-appliances",
    },
    {
      title: "Plumbing & Home",
      description: "Pipework, AC Service, Heat Pump, Washing Machine",
      icon: <Droplets className="w-9 h-9 text-black" />,
      link: "/services/plumbing-home",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-black overflow-hidden pt-24">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 sm:px-8 md:px-12 max-w-6xl w-full py-16 md:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-white mb-4">
          Reliable Home Appliance Care
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10">
          Quick, trusted, and affordable repair & service for your home and
          electrical appliances at your doorstep.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 justify-center items-stretch">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-xl flex flex-col items-center text-center 
               hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 min-h-[170px] sm:min-h-[200px]
               hover:bg-yellow-400 hover:text-black"
            >
              <div className="mb-3">{service.icon}</div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 hover:text-black">
                {service.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-snug hover:text-black">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setIsAppointmentOpen(true)}
            className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold px-6 sm:px-8 py-3 rounded-lg 
             flex items-center gap-2 transition duration-300 hover:bg-yellow-400 hover:text-black"
          >
            Book Appointment
          </button>
        </div>
      </div>

      {isAppointmentOpen && <AppointmentForm onClose={() => setIsAppointmentOpen(false)} />}
    </section>
  );
};

export default HeroSection;
