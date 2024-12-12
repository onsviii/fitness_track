import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NaviBar.css"

import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function NaviBar() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Ви вийшли з акаунту!");
    } catch (error) {
      alert("Помилка виходу: " + error.message);
    }
  };
  
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Fitness Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Здоров'я</Nav.Link>
            <Nav.Link href="/workouts">Тренування</Nav.Link>
            <Nav.Link href="/blog">Блог</Nav.Link>
          </Nav>
          <Nav>
            <button className="exit-btn" onClick={handleLogout}>Вийти</button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}