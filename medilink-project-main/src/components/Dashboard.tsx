import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <div className="bg-white p-4 rounded-xl shadow">
          <p>No medical records uploaded yet.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;