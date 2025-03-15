import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col className="col-md-4">
            <h5><a href="#">About Us</a></h5>
          </Col>
          <Col className="col-md-4">
            <h5><a href="#">Contact Us</a></h5>
          </Col>
          <Col className="col-md-4">
            <h5><a href="#">Follow Us</a></h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;