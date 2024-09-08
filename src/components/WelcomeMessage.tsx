import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/WelcomeMessage.css'
const WelcomeMessage: React.FC = () => {
  return (
    <Container>
      <h1 className='heading'>Welcome, John Mathew!!</h1>
      <Row className="mt-4">
        <Col md={4}>
          <Card className="card">
            <Card.Body>
              <Card.Title>Order Sync Successful!</Card.Title>
              <Card.Text>
                Your order details from the last 30 days have been successfully synced. Check them out now!
              </Card.Text>
              <Button variant="primary">Explore Your Orders</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="card card-warning">
            <Card.Body>
              <Card.Title>Customize Customer Notification</Card.Title>
              <Card.Text>
                Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers
              </Card.Text>
              <Button variant="primary">Configure Notifications</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="card card-info">
            <Card.Body>
              <Card.Title>Your Tracking Link has been generated</Card.Title>
              <Card.Text>
                Include the Link to Your Store's Navigation Menu.
              </Card.Text>
              <Row>
                <Col>
                  <Button variant="secondary">Copy Link</Button>
                </Col>
                <Col>
                  <Button variant="primary">Go To Navigation Menu</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WelcomeMessage;
