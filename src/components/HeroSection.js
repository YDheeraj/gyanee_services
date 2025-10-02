"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const services = [
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
            ),
            title: 'Dishwasher',
            subtitle: 'Repair'
        },
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M7 7h10M7 12h10M7 17h6" />
                </svg>
            ),
            title: 'PCB Repair',
            subtitle: 'Expert'
        },
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
            ),
            title: 'Carpenter',
            subtitle: 'Service'
        },
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17h10M5 21h14M12 3v4M5.8 9h12.4a1 1 0 0 1 .8.4l1.5 2a1 1 0 0 1 .2.6v4a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2v-4a1 1 0 0 1 .2-.6l1.5-2a1 1 0 0 1 .8-.4z" />
                    <circle cx="8" cy="17" r="2" />
                    <circle cx="16" cy="17" r="2" />
                </svg>
            ),
            title: 'Car Mechanic',
            subtitle: ''
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    };

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/hero-background.mp4" type="video/mp4" />
                </video>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Fallback Background if video not available */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 -z-10"></div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                    <div className="max-w-4xl">
                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-12 leading-tight">
                            Expert home appliances care right<br />at your door!
                        </h1>

                        {/* Services Cards Container */}
                        <div className="relative">
                            {/* Left Arrow - Only visible on mobile */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-2 transition-all md:hidden"
                                aria-label="Previous service"
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>

                            {/* Services Grid */}
                            <div className="overflow-hidden">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                                    {services.map((service, index) => (
                                        <div
                                            key={index}
                                            className={`bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${index !== currentSlide ? 'hidden sm:block' : ''
                                                }`}
                                        >
                                            <div className="flex flex-col items-center text-center">
                                                <div className="text-gray-800 mb-4">
                                                    {service.icon}
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                                    {service.title}
                                                </h3>
                                                {service.subtitle && (
                                                    <p className="text-sm text-gray-600">
                                                        {service.subtitle}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Arrow - Only visible on mobile */}
                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-2 transition-all md:hidden"
                                aria-label="Next service"
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>
                        </div>

                        {/* Book Appointment Button */}
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 group">
                            Book Appointment Now
                            <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;