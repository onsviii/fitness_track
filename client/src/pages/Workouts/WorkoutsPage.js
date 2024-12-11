import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import "./WorkoutsPage.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
//import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [formData, setFormData] = useState({
    type: "Біг на вулиці",
    distance: "",
    time: "",
    date: "",
  });
  const [date, setDate] = useState("");

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
  /*<LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              onChange={(e) => setDate(${e.$M + 1}/${e.$D}/${e.$y})}
            />
        </LocalizationProvider>*/

  return (
    <Container className="workouts-container">
      <h1 className="text-light mb-4">Тренування</h1>
      <form onSubmit={handleAddWorkout}>
        <Container className="form-container">
            <Container className="form-group">
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
            </Container>

            <Container className="form-group">
                <label>Відстань (км):</label>
                <input
                type="number"
                name="distance"
                value={formData.distance}
                onChange={handleChange}
                required
                />
            </Container>

            <Container className="form-group">
                <label>Час тренування (хвилини):</label>
                <input
                type="number"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                />
            </Container>

            <Container className="form-group">
                <label>Дата тренування:</label>
                <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                />
            </Container>
        </Container>

        <button type="submit">Додати тренування</button>
      </form>
      
      <Container className="training-container">
        <h3 className="text-light mb-4">Журнал тренувань</h3>
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
      </Container>
    </Container>
  );
}

export default Workouts;