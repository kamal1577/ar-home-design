import React, { useState } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link
import logo from "../assets/logo.png"; // Adjust the import path if needed
import mainImage from "../assets/main-image.png"; // Example feature image
import img2 from "../assets/img2.png"; // Example feature image
import { analyzeImage } from "../services/apiService"; // Correct import
import "./Home.css";


const Home = () => {
  const [analysisResults, setAnalysisResults] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image URL

  const handleImageUpload = async (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
      // Create a FileReader to read the file
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set the image URL to state
      };
      reader.readAsDataURL(file); // Read the file as a data URL

      try {
        const results = await analyzeImage(file); // Call the API service
        setAnalysisResults(results); // Set the results to state
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col xs={12} md={8}>
          <h1>Welcome to AR Home Design</h1>
          <p>
            This app allows you to visualize furniture and designs using Augmented Reality in your home.
            Get a real-time look at how items fit in your home, customize colors and styles, and save or share your designs.
          </p>
          <input type="file" accept="image/*" onChange={handleImageUpload} /> {/* Image upload input */}
          
          {/* Display the selected image if available */}
          {selectedImage && (
            <div>
              <h3>Selected Image:</h3>
              <img src={selectedImage} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} /> {/* Display image */}
            </div>
          )}
          
          {analysisResults && (
            <div>
              <h3>Analysis Results:</h3>
              <pre>{JSON.stringify(analysisResults, null, 2)}</pre> {/* Display results */}
            </div>
          )}
        </Col>
        <Col xs={12} md={4}>
          <Image 
            src={logo} 
            alt="AR Home Design Logo" 
            className="img-fluid rounded shadow" 
            role="img"
            aria-label="AR Home Design logo"
          />
        </Col>
      </Row>
      {/* Remaining code... */}
    </Container>
  );
};

export default Home;
