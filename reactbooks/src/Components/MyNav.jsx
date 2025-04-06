import React from 'react'
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const MyNav = ({ searchQuery, setSearchQuery }) => {
  return (
    <header sticky="top">
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">ReactBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className="nav-link">Home</Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
          <Form.Control 
                        type="text" 
                        placeholder="Filtra per titolo" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} 
                    />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
};

export default MyNav;