import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NaviBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">Fitness Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Здоров'я</Nav.Link>
            <Nav.Link href="/profile">Профіль</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}