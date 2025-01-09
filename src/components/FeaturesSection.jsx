import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const FeaturesSection = () => {
    return (
        <div className="features-section py-5">
            <Container>
                <h2 className="text-center mb-4">Why Choose CPC?</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Targeted Ads</Card.Title>
                                <Card.Text>
                                    Ensure your ads reach the right audience with our targeted CPC campaigns.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Cost Efficiency</Card.Title>
                                <Card.Text>
                                    Only pay when users engage with your ad, making it cost-effective for your business.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Real-Time Analytics</Card.Title>
                                <Card.Text>
                                    Monitor your campaign's performance and adjust to optimize your results.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FeaturesSection;
