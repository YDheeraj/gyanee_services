import { useState } from "react";

export default function AppointmentForm({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.result === "success") {
        setSuccess(true);
        e.target.reset();
        // Optional: close after 2.5s
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 2500);
      } else {
        alert("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Error submitting form!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-end z-50">
      <div className="bg-white w-full max-w-md h-full p-6 relative overflow-y-auto animate-slideIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl hover:text-yellow-500"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-yellow-500 mb-4">
          Enquire Now
        </h2>

        {/* Success message */}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 animate-fadeIn">
            ✅ Form submitted successfully!
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col gap-4 ${loading ? "opacity-60 pointer-events-none" : ""}`}
        >
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
            required
          />
          <select name="service" className="border p-2 rounded" required>
            <option value="">Select Service</option>
            <option>Air Conditioner Repair</option>
            <option>Refrigerator Repair</option>
            <option>Washing Machine Repair</option>
            <option>Microwave Repair</option>
          </select>
          <input
            type="date"
            name="date"
            className="border p-2 rounded"
            defaultValue={new Date().toISOString().split('T')[0]}
            required
          />

          <button
            type="submit"
            className="bg-yellow-500 text-white p-2 rounded font-semibold hover:bg-yellow-400 transition flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Submitting...
              </>
            ) : (
              "SUBMIT"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
