import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NaviBar.css"

export default function NaviBar() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Fitness Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Здоров'я</Nav.Link>
            <Nav.Link href="/profile">Профіль</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}