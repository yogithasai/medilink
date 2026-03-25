import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [reports, setReports] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("reports") || "[]");
    setReports(stored);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Your Medical Records</h1>

        {reports.length === 0 ? (
          <p>No records uploaded yet.</p>
        ) : (
          <div className="space-y-3">
            {reports.map((r, index) => (
              <div key={index} className="p-4 bg-white shadow rounded">
                <p className="font-semibold">{r.name}</p>
                <p className="text-sm text-gray-500">{r.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;