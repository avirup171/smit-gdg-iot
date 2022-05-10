import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const navigation = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Test</Navbar.Brand>
        </LinkContainer>

        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Message</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default navigation;
