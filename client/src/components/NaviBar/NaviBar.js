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
            <Nav.Link href="/workouts">Тренування</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/auth">Вийти з акаунту</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}