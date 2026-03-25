
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Healthcare professionals using MedLink" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              MedLink was founded with a simple goal: to make healthcare management accessible and straightforward for everyone. We believe that managing your health shouldn't be complicated.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our platform connects patients, doctors, and healthcare facilities in one unified system, streamlining communication and making healthcare information easily accessible when you need it most.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
