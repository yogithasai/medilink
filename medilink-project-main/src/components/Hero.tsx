
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              <span className="block">Simple Healthcare</span>
              <span className="block text-blue-600">Management Solution</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
              MediLink helps you manage your healthcare journey with ease. Access test results, prescriptions, and appointments all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 font-medium text-base">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="font-medium text-base">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-lg bg-white shadow-xl overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Medical professionals using MedLink" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white font-medium">
                Simplified Healthcare For Everyone
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
