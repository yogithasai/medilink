
import { FileText, Calendar, Pill } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "Easy Test Results",
      description: "Access your medical test results quickly and securely from anywhere, at any time."
    },
    {
      icon: <Pill className="h-10 w-10 text-blue-600" />,
      title: "Digital Prescriptions",
      description: "Manage your prescriptions digitally, request refills, and get notifications when it's time to renew."
    },
    {
      icon: <Calendar className="h-10 w-10 text-blue-600" />,
      title: "Quick Appointment Booking",
      description: "Schedule appointments with your healthcare providers in just a few clicks."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Features Designed for You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MedLink provides powerful tools to make managing your healthcare simple and efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center rounded-full bg-blue-100 p-3 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
