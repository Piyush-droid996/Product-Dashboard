import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCogs, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons'; // Correct package

const CustomizationOptions = () => {
    return (
        <Container className="customization-container">
            <h2 className="text-center">Discover the Heart of Our Functionality</h2>
            <Row>
                {/* Left card: Color Customization */}
                <Col sm={12} md={4} className="mb-4">
                    <Card className="p-3 shadow-sm">
                        <Card.Body>
                            <Card.Title>Elevate Your Brand Aesthetics with Custom Tracking Page Styles</Card.Title>
                            <Form.Group className="mb-3">
                                <Form.Label>Accent Color:</Form.Label>
                                <Form.Control type="color" id="accentColor" defaultValue="#FF9888" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Text Color:</Form.Label>
                                <Form.Control type="color" id="textColor" defaultValue="#571010" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Background Color:</Form.Label>
                                <Form.Control type="color" id="backgroundColor" defaultValue="#FFEEAA" />
                            </Form.Group>
                            <Button variant="dark" className="w-100">Apply Colors</Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Center card: Onboarding Support */}
                <Col sm={12} md={4} className="mb-4">
                    <Card className="p-3 shadow-sm">
                        <Card.Body>
                            <Card.Title>Exclusive Onboarding Support for High-Volume Brands</Card.Title>
                            <Card.Text>
                                Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.
                            </Card.Text>
                            <Button variant="secondary" className="w-100">Schedule A Call</Button>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Explore Our Integrated Ecosystem</Card.Title>
                            <Card.Text>
                                Discover a variety of popular integrations tailored for your needs.
                            </Card.Text>
                            <div className="d-flex justify-content-around mb-2">
                                <FontAwesomeIcon icon={faPaypal} size="2x" />
                                <FontAwesomeIcon icon={faChartLine} size="2x" />
                                <FontAwesomeIcon icon={faCogs} size="2x" />
                                <FontAwesomeIcon icon={faUsers} size="2x" />
                            </div>
                            <Button variant="primary" className="w-100 mt-3">Explore Integrations</Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Right card: HTML Customization */}
                <Col sm={12} md={4} className="mb-4">
                    <Card className="p-3 shadow-sm">
                        <Card.Body>
                            <Card.Title>Seamlessly Integrate Custom HTML Elements</Card.Title>
                            <Card.Text>
                                Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.
                            </Card.Text>
                            <Form.Group className="mb-3">
                                <Form.Label>HTML Link</Form.Label>
                                <Form.Control as="textarea" id="htmlLink" rows={3} placeholder="Enter HTML content..." />
                            </Form.Group>
                            <Button variant="dark" className="w-100">Apply changes</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomizationOptions;
