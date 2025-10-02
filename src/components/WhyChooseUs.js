import { Clock, UserCheck, TrendingUp } from 'lucide-react'; // or any icon lib

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Customer Satisfaction",
      description: "We prioritize your needs, ensuring every job is done to your complete satisfaction.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-white" />,
      title: "Trained Professionals",
      description: "Our skilled experts deliver top-notch service with precision and care.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Low Cost Charges",
      description: "Enjoy high-quality service at affordable rates without any hidden fees.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 mb-12">
          Power your home with expert appliances repairs!
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              {/* Icon with yellow gradient circle */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mb-4 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-transparent border-2 border-yellow-400 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto">
            Book Appointment Now
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
