"use client";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import React from 'react';
import AppointmentForm from './AppointmentForm';
import Link from 'next/link';

const services = [
  {
    title: 'Air Conditioner Repair',
    image: '/images/air-conditioner.png',
  },
  {
    title: 'Refrigerator Repair',
    image: '/images/fridge.jpg',
  },
  {
    title: 'Washing Machine Repair',
    image: '/images/washing_machine.jpg',
  },
  {
    title: 'Refrigerator Repair',
    image: '/images/fridge.jpg',
  },
  {
    title: 'Washing Machine Repair',
    image: '/images/washing_machine.jpg',
  }
];

const ServicesSlider = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = React.useState(false);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full bg-black/10 py-16 px-4 sm:px-6 lg:px-8"> {/* Off-white background */}
      <div className="max-w-7xl mx-auto text-center text-gray-900"> {/* Dark text on light bg */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Services</h2>
        <p className="text-gray-600 mb-10">Bringing expert repairs to your doorstep.</p>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300 border border-gray-400 rounded-full w-10 h-10 items-center justify-center shadow hover:bg-gray-400"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-2 scrollbar-hide"
            style={{ scrollbarWidth: 'none' /* Firefox */ }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="relative min-w-[220px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[320px] h-56 sm:h-64 md:h-72 rounded-lg overflow-hidden shadow-lg flex-shrink-0"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay for better readability */}
                <div className="absolute inset-0 bg-black/3 "></div>

                {/* Centered Text */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-semibold text-center text-base sm:text-lg drop-shadow-lg z-10">
                  {service.title}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300 border border-gray-400 rounded-full w-10 h-10 items-center justify-center shadow hover:bg-gray-400"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

<div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
  <Link href="/services" passHref>
    <button className="w-full sm:w-48 px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-md hover:bg-yellow-400 hover:text-gray-900 transition">
      View All Services
    </button>
  </Link>
  <button
    onClick={() => setIsAppointmentOpen(true)}
    className="w-full sm:w-48 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-500 transition"
  >
    Enquire Now
  </button>
</div>



      </div>

      {/* Additional style to hide scrollbar on Webkit browsers */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {isAppointmentOpen && (
        <AppointmentForm onClose={() => setIsAppointmentOpen(false)} />
      )}
    </section>
  );
};

export default ServicesSlider;
