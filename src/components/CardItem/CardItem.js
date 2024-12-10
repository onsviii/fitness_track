import React, { useState } from "react";
import "./CardItem.css";

export default function CardItem({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`card-item ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
      <h5 className="card-title">{title}</h5>
      <p className="card-description">{description}</p>
      {isOpen && (
        <div className="card-content">
          <p>Додаткова інформація про {title}...</p>
        </div>
      )}
    </div>
  );
}
