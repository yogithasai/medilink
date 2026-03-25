
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About MedLink</h1>
            <p className="text-xl text-gray-600">
              Transforming healthcare management with innovative technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                MedLink was founded in 2022 by a team of healthcare professionals and technology experts who saw the need for a better way to manage healthcare information and interactions.
              </p>
              <p className="text-gray-600 mb-4">
                After experiencing the frustrations of fragmented healthcare systems firsthand, our founders set out to create a unified platform that would make healthcare management simpler and more accessible for everyone.
              </p>
              <p className="text-gray-600">
                Today, MedLink serves thousands of patients and healthcare providers across the country, bringing efficiency and clarity to healthcare management.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="MedLink founders" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <p className="font-medium">Founded in 2022</p>
                <p className="text-sm text-blue-100">Healthcare innovation</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To simplify healthcare management and improve health outcomes by connecting patients and providers through secure, intuitive digital solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Patients</h3>
              <p className="text-gray-600 mb-4">
                We empower patients to take control of their healthcare journey with easy access to their medical information, simplified appointment booking, and direct communication with their healthcare providers.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Providers</h3>
              <p className="text-gray-600 mb-4">
                We help healthcare providers streamline their practice, reduce administrative burden, and focus more time on patient care with our comprehensive management tools.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Healthcare</h3>
              <p className="text-gray-600 mb-4">
                We contribute to a more connected, efficient healthcare ecosystem by facilitating better communication and information sharing between all stakeholders.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about improving healthcare through technology. Check out our open positions and join us in our mission.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">View Careers</Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
