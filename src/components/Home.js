import React, { useState } from "react";
import PhotoUpload from "./PhotoUpload"; // Ensure the path is correct
import { analyzeImage } from "../services/apiService"; // Adjust the path if needed

const Home = () => {
  const [analysisResults, setAnalysisResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (file) => {
    setLoading(true);
    try {
      const results = await analyzeImage(file);
      setAnalysisResults(results);
    } catch (error) {
      console.error("Error analyzing the image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Other Home component content */}
      <PhotoUpload onUpload={handleImageUpload} />
      {loading && <p>Loading...</p>}
      {analysisResults && (
        <div>
          <h3>Analysis Results:</h3>
          <pre>{JSON.stringify(analysisResults, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Home;
