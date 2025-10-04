"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import AppointmentForm from './AppointmentForm';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Contact Us', href: '/contactus' }
  ];

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left Side: Burger Menu + Logo */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-colors ${isScrolled ? 'text-yellow-400' : 'text-white'} hover:text-yellow-400`}
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>

              <Link href="/">
                <span className="text-2xl md:text-3xl font-bold text-yellow-400 cursor-pointer">
                  GYANEE
                </span>
              </Link>
            </div>

            {/* Right Side (Desktop) */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="tel:+919616218451"
                className={`${isScrolled ? 'text-black-400' : 'text-white'} hover:text-yellow-400 transition-colors whitespace-nowrap`}
              >
                +91 - 96162 18451
              </a>

              <div className="h-6 w-px bg-gray-500"></div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919616218451"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>

              <button
                onClick={() => setIsAppointmentOpen(true)}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2.5 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Right Side */}
            <div className="flex lg:hidden items-center space-x-3">
              <a
                href="https://wa.me/919616218451"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382...Z" />
                </svg>
              </a>
              <button
                onClick={() => setIsAppointmentOpen(true)}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-semibold"
              >
                Enquire
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Slide-in Menu */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
          <span className="text-xl font-bold text-yellow-500">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-black hover:text-yellow-500"
            aria-label="Close"
          >
            <X size={28} />
          </button>
        </div>

        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.name}>
              <span
                onClick={() => setIsMenuOpen(false)}
                className="block px-2 py-3 text-black hover:text-yellow-500 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Appointment Form */}
      {isAppointmentOpen && (
        <AppointmentForm onClose={() => setIsAppointmentOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
