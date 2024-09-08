import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faEye } from '@fortawesome/free-solid-svg-icons';
import '../Styles/PerformanceMetrics.css';
import ShipmentRechart from '../components/ShipmentRechart';

const PerformanceMetrics: React.FC = () => {
  return (
    <Container className="metrics-section">
      <h2 className="text-center mb-4">Instant Dive into Your Performance Metrics</h2>
      <Row className="mb-4">
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Shipment Updates</Card.Title>
              <ShipmentRechart />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Star Facts about your orders!!!</Card.Title>
              <p>There are 8 shipments that have been out for delivery for more than 3 days.</p>
              <p>There are 5 shipments in exception right now.</p>
              <p>The maximum chargebacks are from Miami.</p>
              <Button variant="warning">Check Orders Page</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 metric-details text-center">
            <Card.Body>
              <Card.Title>Tracking Page Views Vs Orders</Card.Title>
              <div className="metric-item">
                <FontAwesomeIcon icon={faBox} className="metric-icon" />
                <div className="metric-text">
                  <p><strong>Orders:</strong> <span className="metric-value">80</span></p>
                </div>
              </div>
              <div className="metric-item">
                <FontAwesomeIcon icon={faEye} className="metric-icon" />
                <div className="metric-text">
                  <p><strong>Tracking Page Views:</strong> <span className="metric-value">44</span></p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PerformanceMetrics;
