import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CallToActionSection = () => {
  return (
    <div className="cta-section text-center py-5 bg-light">
      <Container>
        <Row>
          <Col>
            <h2>Ready to Boost Your Ad Campaign?</h2>
            <p>Get started with our powerful CPC advertising platform today.</p>
            <Button variant="primary" size="lg">
              Start Now
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallToActionSection;
