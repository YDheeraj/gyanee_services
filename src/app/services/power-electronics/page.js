import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ServiceCard from "@/components/ServiceCards";

export default function PowerElectronicsPage() {
  const services = [
    {
      title: "Kitchen Appliances",
      description: "Chimney, Hob, Mixer, Induction & more",
      image: "/images/kitchen.jpg",
      link: "/services/kitchen-appliances",
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
        title="Power Electronics Services"
        description="Reliable power solutions to keep your home and business running without interruption — from inverters and UPS systems to solar panel installations."
        image="/images/power.jpg"
        ctaText="Book Appointment Now"
        ctaLink="#appointment"
      />

      {/* Info Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          Power Electronics Installation & Maintenance
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
          At <strong>GYANEE</strong>, we provide complete <strong>power electronics services</strong> for residential and commercial setups.
          Our solutions include top-quality <strong>inverters, solar panels, UPS systems, stabilizers</strong> and more — all installed and maintained by trained professionals.
        </p>

        <div className="text-gray-700 text-lg leading-relaxed space-y-6 mt-10">
          <h2 className="text-2xl font-semibold mb-4">Our Power Electronics Services Include:</h2>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Inverter Installation & Servicing:</strong> Ensure uninterrupted power supply during outages with efficient inverter systems tailored to your load needs.
            </li>
            <li>
              <strong>Battery Replacement & Maintenance:</strong> We provide long-life batteries, testing, electrolyte checks, and timely replacements for optimal performance.
            </li>
            <li>
              <strong>Solar Panel Installation:</strong> Go green with solar panels designed for rooftops, balconies, and off-grid systems — complete with energy audits and consultations.
            </li>
            <li>
              <strong>Solar Inverter Setup:</strong> Maximize your solar output with high-efficiency hybrid and grid-tied inverters installed by certified technicians.
            </li>
            <li>
              <strong>UPS Systems:</strong> Protect your electronics from sudden power failure with properly sized UPS installations and routine maintenance services.
            </li>
            <li>
              <strong>Voltage Stabilizers:</strong> Avoid appliance damage from voltage fluctuation with smart stabilizer installation for ACs, refrigerators, and TVs.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10 mb-4">Why Choose GYANEE for Power Electronics?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Expert recommendations based on your home’s power load and usage</li>
            <li>Certified installation with safety and efficiency in mind</li>
            <li>Quick troubleshooting and repair for inverter and solar issues</li>
            <li>Competitive pricing and genuine components</li>
            <li>End-to-end solutions — from wiring to wall-mounting and commissioning</li>
          </ul>

          <p className="mt-6">
            Whether you're planning to move to solar, need a UPS backup, or want to upgrade your home’s power reliability, <strong>GYANEE</strong> ensures expert guidance and dependable service every step of the way.
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
