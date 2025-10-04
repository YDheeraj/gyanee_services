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
            <div className="absolute bottom-0 left-0 bg-gradient-to-r from-sky-500 to-blue-600 text-white p-4 rounded-tr-lg">
              <div className="text-3xl font-bold">6</div>
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
            At Ariska, we know that home appliances are the heartbeat of your daily life. When they stop working, life slows down. That’s why we’ve dedicated ourselves to providing fast, reliable, and personalized at-door repair services. We restore the rhythm of your home, bringing comfort and ease back to your everyday routine.
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-4 text-center lg:text-left">
            Our team of highly trained technicians arrives promptly at your doorstep, equipped with the skills and tools to handle a wide range of issues across almost every brand. Be it anything, we’ve got the knowledge and experience to get the job done right, the first time.
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-6 text-center lg:text-left">
            We take immense pride in our work. Our technicians are passionate about delivering service that goes above and beyond expectations. We understand that your appliances are an investment, and we treat them with the care and respect they deserve. With Ariska, you can trust that every repair is handled with precision.
          </p>

          {/* Stats Section */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-y-6 gap-x-10 text-center sm:text-left">
            <div className="flex-1 min-w-[100px]">
              <div className="text-xl sm:text-2xl font-bold">400+</div>
              <div className="text-sm text-gray-600">Google Reviews</div>
            </div>
            <div className="flex-1 min-w-[100px]">
              <div className="text-xl sm:text-2xl font-bold">4000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="flex-1 min-w-[100px]">
              <div className="text-xl sm:text-2xl font-bold">6+</div>
              <div className="text-sm text-gray-600">of experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoAreWe;
