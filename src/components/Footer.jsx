import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="footer-section py-3 bg-dark text-white">
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>&copy; 2025 CPC Platform. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
