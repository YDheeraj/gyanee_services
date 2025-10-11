import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ServiceCard from "@/components/ServiceCards";

export default function PlumbingHomePage() {
  const services = [
    {
      title: "Kitchen Appliances",
      description: "Chimney, Hob, Mixer, Induction & more",
      image: "/images/kitchen.jpg",
      link: "/services/kitchen-appliances",
    },
    {
      title: "Power Electronics",
      description: "Inverter, Battery, Solar Panel, UPS",
      image: "/images/power.jpg",
      link: "/services/power-electronics",
    },
    {
      title: "Electrical Appliances",
      description: "Pump, Fan, Heater, Wiring, Air Cooler",
      image: "/images/electrical.jpg",
      link: "/services/electrical-appliances",
    }
  ];

  return (
    <>
      <ServiceHero
        title="Plumbing & Home Services"
        description="Dependable plumbing and home appliance solutions for stress-free living — from leak repairs to appliance installations, we’ve got your home covered."
        image="/images/plumbing.jpg"
        ctaText="Book Appointment Now"
        ctaLink="#appointment"
      />

      {/* Info Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          Complete Plumbing & Home Appliance Services
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
          At <strong>GYANEE</strong>, we specialize in providing fast, professional, and affordable <strong>plumbing and home maintenance solutions</strong>.
          Whether it’s a leaky pipe or a malfunctioning appliance, our team ensures your home stays functional and comfortable all year long.
        </p>

        <div className="text-gray-700 text-lg leading-relaxed space-y-6 mt-10">
          <h2 className="text-2xl font-semibold mb-4">Our Plumbing & Home Services Include</h2>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Pipework & Leak Repairs:</strong> From dripping taps to underground leak detection, we offer precise repairs and replacements.
            </li>
            <li>
              <strong>Bathroom & Kitchen Plumbing:</strong> Installation and servicing of sinks, faucets, water lines, and more — all handled with expert care.
            </li>
            <li>
              <strong>Air Conditioner (AC) Servicing:</strong> Comprehensive AC check-ups, gas refilling, filter cleaning, and repair for split, window, and ducted units.
            </li>
            <li>
              <strong>Washing Machine Repair:</strong> We fix drainage issues, motor problems, and control board faults in all major brands — top load or front load.
            </li>
            <li>
              <strong>Heat Pump Installation & Maintenance:</strong> Improve your energy efficiency with professional heat pump setup, repair, and seasonal maintenance.
            </li>
            <li>
              <strong>Pressure Booster Pumps:</strong> Low water pressure? Our technicians install and service booster systems for consistent water flow.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10 mb-4">Why Choose GYANEE Plumbing & Home Services?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Same-day service and quick issue resolution</li>
            <li>Licensed, background-verified plumbers and technicians</li>
            <li>Advanced tools for detection and repair</li>
            <li>Affordable service packages and no hidden charges</li>
            <li>Trusted support for apartments, houses, and commercial spaces</li>
          </ul>

          <p className="mt-6">
            From minor fixes to major overhauls, GYANEE ensures that your home systems stay efficient, leak-free, and problem-free. We're just a call away — ready to restore your comfort.
          </p>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="max-w-5xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Other Services We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:flex lg:justify-between lg:flex-wrap">
          {services.map((service, i) => (
            <div key={i} className="w-full lg:w-[23%]">
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
