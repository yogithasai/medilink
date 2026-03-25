import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (!file) return;

    const storedFiles = JSON.parse(localStorage.getItem("reports") || "[]");

    storedFiles.push({
      name: file.name,
      date: new Date().toLocaleString(),
    });

    localStorage.setItem("reports", JSON.stringify(storedFiles));

    alert("File uploaded!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">
          Upload Medical Record
        </h1>

        <input
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const selectedFile = e.currentTarget.files?.[0] || null;
            setFile(selectedFile);
          }}
        />

        {file && (
          <p className="mt-4 text-green-600">
            Uploaded: {file.name}
          </p>
        )}

        <button
          onClick={handleUpload}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save File
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Upload;