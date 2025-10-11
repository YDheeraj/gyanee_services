import AboutHeroSection from "@/components/AboutHeroSection";
import ServiceCard from "@/components/ServiceCards";


export default function ServicesPage() {
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
      <AboutHeroSection
        head={"Our Services"}
        text={"Let’s turn solutions into action!"}
        image={"/images/remote.jpg"}
      />

      <section className="max-w-6xl mx-auto py-16 px-6">
        <p className="text-gray-700 text-lg leading-relaxed mb-10 text-center">
          Explore our wide range of home and electrical appliance services. Whether you need installation,
          maintenance, or complete setup solutions, <strong>GYANEE Services</strong> provides professional, reliable, and affordable
          support at your doorstep.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-10 text-center">
          In addition to providing top-notch services, <strong>GYANEE Services</strong> also offers a wide selection of related products for sale.
          From kitchen appliances and electrical devices to solar and power solutions, we ensure you get high-quality,
          reliable products to suit all your home needs.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-10 text-center">
          At <strong>GYANEE Services</strong>, we handle everything from <strong>product sales</strong> to <strong>installation, maintenance, and repair</strong>.
          Our team takes care of every step, ensuring a seamless experience so that your home and appliances run smoothly and efficiently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>
      </section>
    </>
  );
}
