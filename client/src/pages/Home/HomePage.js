import React from "react";
import Container from 'react-bootstrap/Container';
import CardItem from "../../components/CardItem/CardItem";
import "./HomePage.css"

export default function Home() {
  return (
    <Container className="home-container">
      <h1 className="text-light mb-4">Здоров'я</h1>
      <Container className="status-bar">
        <Container className="status-item">
          🔥 Калорії: <strong>0/400 ккал</strong>
        </Container>
        <Container className="status-item">
          👣 Кроки: <strong>0/6000</strong>
        </Container>
        <Container className="status-item">
          ⏱️ Розминка: <strong>0/30 хв</strong>
        </Container>
      </Container>
      <Container className="card-container">
        <CardItem title="Сон" description="Знайдіть вашу сонну тваринку" />
        <CardItem title="Пульс" description="Одягніть пристрій і виміряйте" />
        <CardItem title="Тиск" description="Одягніть пристрій і виміряйте" />
        <CardItem title="Кисень у крові" description="Одягніть пристрій і виміряйте" />
      </Container>
    </Container>
  );
}