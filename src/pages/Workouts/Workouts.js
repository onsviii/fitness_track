import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import "./Workouts.css";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [formData, setFormData] = useState({
    type: "Біг на вулиці",
    distance: "",
    time: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateCalories = (type, distance, time) => {
    const MET = {
      "Біг на вулиці": 8,
      Ходьба: 3.8,
      "Біг на доріжці": 7.5,
      "Їзда на велосипеді": 6,
    };
    const weight = 70;
    const hours = time / 60;
    return Math.round(MET[type] * weight * hours);
  };

  const handleAddWorkout = (e) => {
    e.preventDefault();

    const calories = calculateCalories(
      formData.type,
      formData.distance,
      formData.time
    );

    const newWorkout = {
      ...formData,
      calories,
    };

    setWorkouts([...workouts, newWorkout]);

    setFormData({
      type: "Біг на вулиці",
      distance: "",
      time: "",
      date: "",
    });
  };

  return (
    <Container className="workouts-container">
      <h2>Мої тренування</h2>
      <form onSubmit={handleAddWorkout}>
        <div>
          <label>Тип тренування:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="Біг на вулиці">Біг на вулиці</option>
            <option value="Ходьба">Ходьба</option>
            <option value="Біг на доріжці">Біг на доріжці</option>
            <option value="Їзда на велосипеді">Їзда на велосипеді</option>
          </select>
        </div>

        <div>
          <label>Пройдена відстань (км):</label>
          <input
            type="number"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Час тренування (хвилини):</label>
          <input
            type="number"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Дата тренування:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Додати тренування</button>
      </form>

      <div>
        <h3>Список тренувань</h3>
        {workouts.length === 0 ? (
          <p>Ще немає тренувань. Додайте перше!</p>
        ) : (
          <ul className="workout-list">
            {workouts.map((workout, index) => (
              <li key={index} className="workout-item">
                <p><strong>Тип:</strong> {workout.type}</p>
                <p><strong>Дата:</strong> {workout.date}</p>
                <p><strong>Час:</strong> {workout.time} хв</p>
                <p><strong>Відстань:</strong> {workout.distance} км</p>
                <p><strong>Калорії:</strong> {workout.calories} ккал</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
}

export default Workouts;
