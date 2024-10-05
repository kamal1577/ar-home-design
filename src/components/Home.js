import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <h1>Welcome to AR Home Design</h1>
          <p>This app will allow you to visualize furniture and designs using Augmented Reality in your home.</p>
        </Col>
        <Col xs={12} md={4}>
          {/* You can put an image or additional content */}
          <img src="path_to_image" alt="Home Design" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;


 

