export default function AppointmentForm({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-full max-w-md h-full p-6 relative overflow-y-auto animate-slideIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-yellow-500 mb-4">
          Enquire Now
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            required
          />
          <select className="border p-2 rounded">
            <option>Select Service</option>
            <option>Air Conditioner Repair</option>
            <option>Refrigerator Repair</option>
            <option>Washing Machine Repair</option>
            <option>Microwave Repair</option>
          </select>
          <input type="date" className="border p-2 rounded" />
          <button
            type="submit"
            className="bg-yellow-500 p-2 rounded font-semibold hover:bg-yellow-400"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
