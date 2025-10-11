import React from 'react';

const AboutWhoAreWe = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Images Section */}
        <div className="space-y-6 order-2 lg:order-1">
          {/* Top Large Image with Badge */}
          <div className="relative rounded-md overflow-hidden shadow-md">
            <img
              src="/images/washing_machine.jpg"
              alt="Technician fixing AC"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-4 rounded-tr-lg">
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm font-light leading-tight">
                Years of<br />excellence
              </div>
            </div>
          </div>

          {/* Two Smaller Images */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Image 1 */}
            <div className="flex-1 rounded-md overflow-hidden shadow-md">
              <img
                src="/images/fridge.jpg"
                alt="Technician fixing fridge"
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="flex-1 rounded-md overflow-hidden shadow-md">
              <img
                src="/images/washing_machine.jpg"
                alt="Technician fixing dishwasher"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left">
            Who Are We?
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-4 text-center lg:text-left">
            At Ariska, we are your trusted partner for all kinds of <strong>kitchen, electrical, power, solar, and home appliances</strong>. We not only provide top-quality products but also ensure reliable services that keep your home running smoothly. Our mission is to bring innovation, efficiency, and comfort to every household we serve.
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-4 text-center lg:text-left">
            From <strong>kitchen essentials</strong> like induction cooktops, chimneys, LPG stoves, hobs, kettles, and mixer grinders to <strong>power electronics</strong> such as inverters, batteries, stabilizers, UPS systems, and solar panels we deliver everything you need under one roof. We also handle <strong>AC servicing, plumbing, wiring, and installation</strong> for all major home appliances.
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-6 text-center lg:text-left">
            Our team takes pride in offering <strong>complete sales and service solutions</strong> with professionalism and care. Whether it’s a repair, installation, or a new appliance purchase, we’re here to ensure your experience is smooth and satisfying. With Ariska, your home is always in good hands.
          </p>

          {/* Stats Section */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-y-6 gap-x-10 text-center sm:text-left">
            {/* <div className="flex-1 min-w-[100px]">
              <div className="text-xl sm:text-2xl font-bold">400+</div>
              <div className="text-sm text-gray-600">Google Reviews</div>
            </div> */}
            <div className="flex-1 min-w-[100px]">
              <div className="text-xl sm:text-2xl font-bold">1000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="flex-1 min-w-[100px]">
              <div className="text-xl sm:text-2xl font-bold">5+</div>
              <div className="text-sm text-gray-600">Years of experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoAreWe;
