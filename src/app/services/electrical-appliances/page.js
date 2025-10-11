import ServiceHero from "@/components/ServiceHero";
import ServiceCard from "@/components/ServiceCards";

export default function ElectricalAppliancesPage() {
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
      title: "Plumbing & Home",
      description: "Pipework, AC Service, Heat Pump, Washing Machine",
      image: "/images/plumbing.jpg",
      link: "/services/plumbing-home",
    },
  ];

  return (
    <>
      <ServiceHero
        title="Electrical Appliances"
        description="We provide high-quality electrical appliances and services to keep your home running smoothly and safely."
        image="/images/electrical.jpg"
        ctaText="Book Appointment Now"
        ctaLink="#appointment"
      />

      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Comprehensive Electrical Appliance Services
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
          <strong>GYANEE Services</strong> provides a wide range of dependable and affordable solutions for all your home electrical needs. Whether it's installation, repair, or routine maintenance, our trained technicians ensure everything runs efficiently and safely.
        </p>

        <div className="text-gray-700 text-lg leading-relaxed space-y-6">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Pumps & Water Systems:</strong> Installation and servicing of submersible, centrifugal, and booster pumps. We ensure uninterrupted water flow throughout your home.
            </li>
            <li>
              <strong>Ceiling, Table & Exhaust Fans:</strong> From wobbly fans to burnt-out motors, we repair and install fans with precision to restore comfort and airflow.
            </li>
            <li>
              <strong>Water Heaters (Electric & Solar):</strong> Whether you need a quick fix or a brand-new installation, we handle geysers, solar heaters, and hybrid systems efficiently.
            </li>
            <li>
              <strong>Air Coolers & Ventilation:</strong> Keep your home breezy with expert repairs and services for all types of air coolers, including portable and ducted models.
            </li>
            <li>
              <strong>Full Electrical Wiring:</strong> From rewiring old homes to safe and modern installations in new builds, we offer complete electrical wiring solutions with quality assurance.
            </li>
            <li>
              <strong>Breakers, Panels & Load Balancing:</strong> Electrical overloads? Tripping issues? We diagnose and fix circuit panel problems to keep your electrical system safe and balanced.
            </li>
          </ul>

          <p>
            Our goal is to ensure your comfort, convenience, and safety — without the hassle. GYANEE’s technicians are trained, punctual, and equipped to handle everything from emergency breakdowns to proactive maintenance.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">Why Choose GYANEE Electrical Services?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Same-day service for urgent issues</li>
            <li>Experienced and background-verified technicians</li>
            <li>Transparent pricing with no hidden costs</li>
            <li>Genuine replacement parts with warranty</li>
            <li>Preventive maintenance options to avoid future breakdowns</li>
            <li>Support for residential, commercial, and rental properties</li>
          </ul>

          <p className="mt-6">
            With GYANEE, your home stays powered, protected, and performing at its best — every single day.
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
