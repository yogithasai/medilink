
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is MedLink?",
      answer: "MedLink is a healthcare management platform that helps patients and healthcare providers streamline the healthcare process. It provides features like appointment booking, access to test results, digital prescriptions, and more."
    },
    {
      question: "How do I create an account?",
      answer: "You can create an account by clicking on the 'Get Started' button on our homepage, or by clicking on 'Create an account' in the sign-in dropdown. You'll need to provide some basic information and verify your email address."
    },
    {
      question: "Is my medical data secure?",
      answer: "Yes, we take security and privacy very seriously. MedLink is HIPAA compliant and uses industry-standard encryption to protect your data. We never share your medical information without your explicit consent."
    },
    {
      question: "How do I book an appointment?",
      answer: "After logging in, navigate to the Appointments section in your dashboard. Click on 'Book New Appointment', select your healthcare provider, choose an available time slot, and confirm your booking."
    },
    {
      question: "Can I view my family members' medical records?",
      answer: "Yes, MedLink allows you to create family profiles and manage healthcare for your dependents. You'll need to verify your relationship and get proper authorization first."
    },
    {
      question: "How do I request prescription refills?",
      answer: "In your dashboard, go to the Prescriptions section, find the prescription you need refilled, and click the 'Request Refill' button. Your request will be sent to your healthcare provider for approval."
    },
    {
      question: "What should I do if I forget my password?",
      answer: "Click on the 'Forgot password?' link in the sign-in dropdown. Enter your email address, and we'll send you instructions to reset your password."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, MedLink is available as a mobile app for both iOS and Android devices. You can download it from the App Store or Google Play Store."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h1>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <span className="ml-6 flex-shrink-0">
                      {activeIndex === index ? (
                        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                Still have questions? <a href="/contact" className="text-blue-600 font-medium hover:text-blue-800">Contact our support team</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQs;
