import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

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
        // Add more items as needed
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

    return (
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
    );
};

export default LinksSection;
