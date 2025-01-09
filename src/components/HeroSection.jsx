import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="hero-section text-center py-5 bg-primary text-white">
      <Container>
        <Row>
          <Col>
            <h1>Maximize Your Ad Revenue with CPC</h1>
            <p>
              Get the best results from your advertising campaigns with cost-per-click (CPC) strategies.
            </p>
            <Button variant="light" size="lg">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
