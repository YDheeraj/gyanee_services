"use client";

import React, { useState } from "react";
import AppointmentForm from "./AppointmentForm";

export default function ServiceHero({ title, description, image, ctaText }) {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center text-center bg-black overflow-hidden pt-24 pb-12">
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 px-6 sm:px-12 max-w-4xl text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6">{description}</p>

          <button
            onClick={() => setIsAppointmentOpen(true)}
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300"
          >
            {ctaText || "Book Appointment"}
          </button>
        </div>
      </section>

      {/* Appointment Form */}
      {isAppointmentOpen && (
        <AppointmentForm onClose={() => setIsAppointmentOpen(false)} />
      )}
    </>
  );
}
