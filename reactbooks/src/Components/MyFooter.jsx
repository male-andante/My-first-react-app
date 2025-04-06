import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <footer className="d-flex bg-dark text-light py-4">
      <Container>
        <Row>
          <Col className="col-md-4">
            <h5 className="text-white m-auto p-2"><a href="#">About Us</a></h5>
          </Col>
          <Col className="col-md-4">
            <h5 className="text-white m-auto p-2"><a href="#">Contact Us</a></h5>
          </Col>
          <Col className="col-md-4">
            <h5 className="text-white m-auto p-2"><a href="#">Follow Us</a></h5>
          </Col>
          <Col sm={12}> <strong>ReactBooks</strong> - Copyright {new Date().getFullYear()} </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;