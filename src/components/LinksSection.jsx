import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const LinksSection = () => {
    const links = [
        {
            title: 'Special Offer 1',
            description: 'Get a 50% discount on your first purchase.',
            url: 'https://www.example.com/offer1',
        },
        {
            title: 'Exclusive Deal 2',
            description: 'Sign up today and get a free trial for 30 days.',
            url: 'https://www.example.com/offer2',
        },
        {
            title: 'Amazing Discount 3',
            description: 'Shop now and save big on our limited-time sale.',
            url: 'https://www.example.com/offer3',
        },
    ];

    const gameApps = [
        {
            name: 'Game 1',
            description: 'A thrilling adventure game.',
            img: 'https://via.placeholder.com/150',
            url: 'https://www.example.com/game1',
        },
        {
            name: 'Game 2',
            description: 'An exciting puzzle game.',
            img: 'https://via.placeholder.com/150',
            url: 'https://www.example.com/game2',
        },
        {
            name: 'Game 3',
            description: 'A fun racing game.',
            img: 'https://via.placeholder.com/150',
            url: 'https://www.example.com/game3',
        },
        // Add more games as needed
    ];

    return (
        <div>
            {/* Links Section */}
            <div className="links-section py-5" id="links-section">
                <Container>
                    <h2 className="text-center mb-4">Explore Our Offers</h2>
                    <div className="horizontal-scroll-container">
                        {links.map((link, index) => (
                            <div className="card-wrapper" key={index}>
                                <Card className="h-100">
                                    <Card.Body>
                                        <Card.Title>{link.title}</Card.Title>
                                        <Card.Text>{link.description}</Card.Text>
                                        <Button variant="primary" href={link.url} target="_blank">
                                            Click Here
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* Game Apps Section */}
            <div className="game-apps-section py-5" id="game-apps-section">
                <Container>
                    <h2 className="text-center mb-4">Download Our Game Apps</h2>
                    <Row>
                        {gameApps.map((app, index) => (
                            <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                                <Card>
                                    <Card.Img variant="top" src={app.img} />
                                    <Card.Body>
                                        <Card.Title>{app.name}</Card.Title>
                                        <Card.Text>{app.description}</Card.Text>
                                        <Button variant="primary" href={app.url} target="_blank">
                                            Download
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default LinksSection;
