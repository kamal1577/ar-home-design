import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom"; // Import useLocation
import mainImage from "../assets/main-image.png"; // Sample image, adjust as needed

const DetailPage = () => {
  const { featuresName } = useParams(); // Get the features parameter from the URL
  const location = useLocation(); // Get the location object
  const analysisResults = location.state?.analysisResults; // Get analysis results from state

  // Sample content based on the feature name
  const featureDetails = {
    "real-time-visualization": {
      title: "Real-Time Visualization",
      description: "Visualize furniture in real-time using your camera. This feature allows you to see how various items fit into your space.",
      image: mainImage,
    },
    "customization-options": {
      title: "Customization Options",
      description: "Choose from a variety of colors and styles to match your decor. Personalize your designs effortlessly.",
      image: mainImage,
    },
    "save-share-designs": {
      title: "Save & Share Designs",
      description: "Save your designs and share them with friends. Get feedback and make adjustments together.",
      image: mainImage,
    },
  };

  const feature = featureDetails[featuresName] || {};

  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={6}>
          <Image src={feature.image} alt={feature.title} fluid />
        </Col>
        <Col xs={12} md={6}>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
          {analysisResults && (
            <div>
              <h3>Analysis Results</h3>
              {/* You can customize this part based on your analysis result structure */}
              <pre>{JSON.stringify(analysisResults, null, 2)}</pre>
            </div>
          )}
          <Button variant="primary">Get Started</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
