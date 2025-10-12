import React, { useState } from "react";

const GetInTouch = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // 'success' or 'error'
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-yellow-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-2">Get In Touch</h2>
        <p className="text-center mb-8 max-w-md mx-auto">
          Have a question or need a quick repair? We’re just a call or click away! Reach out to us today.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="p-3 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="p-3 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="p-3 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="w-full p-3 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`bg-yellow-400 hover:bg-yellow-500 transition px-6 py-2 rounded-md font-semibold text-black ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>

          {status === "success" && (
            <p className="mt-4 text-green-600 text-center">Thank you! Your message has been sent.</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-600 text-center">Oops! Something went wrong. Please try again later.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
