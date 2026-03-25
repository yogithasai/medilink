
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactComponent from "@/components/Contact";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Contact;
