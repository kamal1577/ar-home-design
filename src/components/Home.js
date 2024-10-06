import React from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link
import logo from "../assets/logo.png"; // Adjust the import path if needed
import mainImage from "../assets/main-image.png"; // Example feature image
import img2 from "../assets/img2.png"; // Example feature image
import "./Home.css";
const Home = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col xs={12} md={8}>
          <h1>Welcome to AR Home Design</h1>
          <p>
            This app allows you to visualize furniture and designs using Augmented Reality in your home.
            Get a real-time look at how items fit in your home, customize colors and styles, and save or share your designs.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <Image 
            src={logo} 
            alt="AR Home Design Logo" 
            className="img-fluid rounded shadow" 
            role="img"
            aria-label = "AR Home Design logo"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h3>Features:</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <Link to="/details/real-time-visualization"> {/* Link to details page */}
            <Card className="mb-4 d-flex flex-column">
              <Card.Img variant="top" src={mainImage} alt="Real-Time Visualization" />
              <Card.Body className="text-center">
                <Card.Title>Real-Time Visualization</Card.Title>
                <Card.Text>
                  Visualize furniture in real-time using your camera.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col xs={12} md={4}>
          <Link to="/details/customization-options"> {/* Link to details page */}
            <Card className="mb-4 d-flex flex-column">
              <Card.Img variant="top" src={img2} alt="Customization Options" />
              <Card.Body className="text-center">
                <Card.Title>Customization Options</Card.Title>
                <Card.Text>
                  Customize colors and styles to match your decor.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col xs={12} md={4}>
          <Link to="/details/save-share-designs"> {/* Link to details page */}
            <Card className="mb-4 d-flex flex-column">
              <Card.Body className="text-center">
                <Card.Title>Save & Share Designs</Card.Title>
                <Card.Text>
                  Save and share your designs with friends.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
