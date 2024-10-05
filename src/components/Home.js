import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css'; // Custom CSS for further tweaking

const Home = () => {
  return (
    <Container className="home-container text-center my-5">
      <Row>
        <Col>
          <h1 className="display-4 mb-4">Welcome to AR Home Design</h1>
          <p className="lead mb-4">
            Experience the future of home design with our cutting-edge augmented reality tool. 
            Visualize furniture and decorations in your space instantly!
          </p>
          <Button href="/ar" variant="success" size="lg" className="get-started-btn">
            Get Started with AR
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

 

