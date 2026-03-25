import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Upload Medical Record</h1>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        {file && (
          <p className="mt-4 text-green-600">
            Uploaded: {file.name}
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Upload;