import React from "react";
import CardItem from "../components/CardItem/CardItem";;

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="text-light mb-4">Здоров'я</h1>
      <div className="status-bar">
        <div className="status-item">
          🔥 Калорії: <strong>0/400 ккал</strong>
        </div>
        <div className="status-item">
          👣 Кроки: <strong>0/6000</strong>
        </div>
        <div className="status-item">
          ⏱️ Розминка: <strong>0/30 хв</strong>
        </div>
      </div>
      <div>
        <CardItem title="Сон" description="Знайдіть вашу сонну тваринку" />
        <CardItem title="Пульс" description="Одягніть пристрій і виміряйте" />
        <CardItem title="Тиск" description="Одягніть пристрій і виміряйте" />
        <CardItem title="Кисень у крові" description="Одягніть пристрій і виміряйте" />
      </div>
    </div>
  );
}