import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ServiceCard from "@/components/ServiceCards";

export default function KitchenAppliancesPage() {
  const services = [
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
    },
    {
      title: "Plumbing & Home",
      description: "Pipework, AC Service, Heat Pump, Washing Machine",
      image: "/images/plumbing.jpg",
      link: "/services/plumbing-home",
    },
  ];

  return (
    <>
      <ServiceHero
        title="Kitchen Appliances"
        description="Modern, safe, and efficient kitchen appliance services — from installation to expert repairs, we keep your kitchen running smoothly."
        image="/images/kitchen.jpg"
        ctaText="Book Appointment Now"
        ctaLink="#appointment"
      />

      {/* Kitchen Services Info Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          Comprehensive Kitchen Appliance Services
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
          We offer a complete range of kitchen appliance solutions — from brand-new installations to routine servicing. Whether you're upgrading your kitchen or fixing an issue, our professionals provide reliable, efficient, and affordable services.
        </p>

        <div className="text-gray-700 text-lg leading-relaxed space-y-6 mt-10">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Induction Cooktops:</strong> Safe and energy-efficient. We install and repair all induction models with certified support.
            </li>
            <li>
              <strong>Chimneys:</strong> Installation, deep cleaning, and maintenance. Eliminate smoke, grease, and lingering odors from your kitchen.
            </li>
            <li>
              <strong>LPG Stoves & Hobs:</strong> Expert repairs and gas-safe installations to keep your cooking appliances reliable and secure.
            </li>
            <li>
              <strong>Electric Kettles, Toasters & More:</strong> We handle small appliance repairs with care and provide genuine replacement parts.
            </li>
            <li>
              <strong>Mixer Grinders & Food Processors:</strong> Broken blades or burnt motors? We restore them to like-new condition.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10 mb-4">Why Choose GYANEE for Kitchen Appliances?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Same-day service for urgent appliance issues</li>
            <li>Trained technicians for all major kitchen brands</li>
            <li>Safe installations following all gas and electrical guidelines</li>
            <li>Genuine parts with warranty-backed support</li>
            <li>Upfront pricing — no hidden charges</li>
          </ul>

          <p className="mt-6">
            Whether it’s a repair, installation, or a full kitchen setup, we ensure your appliances are working at their best — safely and efficiently.
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
