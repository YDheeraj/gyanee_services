import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ServiceCard = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white p-8 rounded-lg shadow-md items-center lg:items-start">
      {/* Left Section: Image */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-start p-4">
        <img
          src="images/contact_us.jpg"
          alt="Service"
          className="hidden lg:block rounded-lg max-w-[90%] lg:max-w-[80%] h-auto"
        />
      </div>


      {/* Right Section: Contact Info */}
      <div className="w-full lg:w-1/2 lg:pl-8 mt-6 lg:mt-0 text-center lg:text-left">
        <h2 className="text-2xl font-semibold text-black mb-6">Gyanee Service</h2>

        {/* Contact Info Items */}
        <div className="space-y-6">
          {/* Location */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <div className="border-2 border-yellow-500 rounded-full p-3 mb-2">
              <FaMapMarkerAlt className="text-yellow-500 text-xl" />
            </div>
            <p className="text-gray-600 max-w-xs">
              Lohia Talab WardNo.2, H.No.1349, Putlighar, Mirzapur, Uttar Pradesh, 231001
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <div className="border-2 border-yellow-500 rounded-full p-3 mb-2 lg:mb-0">
              <FaPhoneAlt className="text-yellow-500 text-xl" />
            </div>
            <p className="text-gray-700 text-center lg:text-left lg:mt-4">+91 - 78971 25865</p>
          </div>

          {/* Email */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <div className="border-2 border-yellow-500 rounded-full p-3 mb-2">
              <FaEnvelope className="text-yellow-500 text-xl" />
            </div>
            <a
              href="mailto:support@gyaneeservices.com"
              className="text-gray-700 hover:text-yellow-600 lg:mt-4"
            >
              support@gyaneeservices.com
            </a>
          </div>
        </div>


        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 max-w-md mx-auto lg:mx-0">
          <a
            href="https://maps.app.goo.gl/Gc5Y72NeedFpc7vG8"
            className="w-full bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Location Map
          </a>
          <a
            href="https://wa.me/917897125865"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold flex items-center justify-center"
          >
            WhatsApp Chat
          </a>
        </div>

      </div>
    </div>
  );
};

export default ServiceCard;
