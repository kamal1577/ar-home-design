import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ARPage.css'; // Custom CSS for ARPage

const ARPage = () => {
  return (
    <Container className="ar-container text-center my-5">
      <Row>
        <Col>
          <h1 className="display-4 mb-4">Explore AR Home Design</h1>
          <p className="lead mb-4">
            Ready to visualize your furniture and home designs? 
            Use augmented reality to plan and perfect your dream space!
          </p>
          <p className="coming-soon">
            The feature is coming soon! Stay tuned for updates.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ARPage;

