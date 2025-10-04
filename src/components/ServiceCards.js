import React from "react";
import AppointmentForm from "./AppointmentForm";
export default function ServiceCards() {
  const [isAppointmentOpen, setIsAppointmentOpen] = React.useState(false);
  const services = [
    {
      title: "Air Conditioner Repair",
      imageUrl: "/images/air-conditioner.png",
      link: "/service/air-conditioner-repair",
    },
    {
      title: "Refrigerator Repair",
      imageUrl: "/images/fridge.jpg",
      link: "/service/refrigerator-repair",
    },
    {
      title: "Washing Machine Repair",
      imageUrl: "/images/washing_machine.jpg",
      link: "/service/washing-machine-repair",
    },
    {
      title: "Microwave Repair",
      imageUrl: "/images/air-conditioner.png",
      link: "/service/microwave-repair",
    },
    {
      title: "Dishwasher Repair",
      imageUrl: "/images/air-conditioner.png",
      link: "/service/dishwasher-repair",
    },
    {
      title: "Water Purifier Repair",
      imageUrl: "/images/fridge.jpg",
      link: "/service/water-purifier-repair",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {services.map(({ title, imageUrl, link }) => (
          <div onClick={() => setIsAppointmentOpen(true)}
            className="relative block h-56 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
          {/* <a onClick={() => setIsAppointmentOpen(true)}
            key={title}
            href={link}
          > */}
            <img 
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white font-semibold text-lg px-3 text-center">
                {title}
              </h3>
            </div>
          {/* </a> */}
          </div>
        ))}
      </div>
      {isAppointmentOpen && (
        <AppointmentForm onClose={() => setIsAppointmentOpen(false)} />
      )}
    </div>
  );
}
