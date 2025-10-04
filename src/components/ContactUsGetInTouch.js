import React from "react";

const GetInTouch = () => {
  return (
    <section className="bg-yellow-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold mb-2">Get In Touch</h2>
        <p className="text-center mb-8 max-w-md mx-auto">
          Have a question or need a quick repair? We’re just a call or click away! Reach out to us today.
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone"
              className="p-3 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 transition px-6 py-2 rounded-md font-semibold text-black"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
