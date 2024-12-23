import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import {Visibility, VisibilityOff } from "@mui/icons-material";
import { CircularProgress } from '@mui/material';
import './Authentication.css'

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    const validateInputs = () => {
      if (!name || !email || !password) {
        alert("Please fill in all fields");
        return false;
      }
      return true;
    };
  
    const handelSignUp = async (e) => {
      e.preventDefault();
      setLoading(true);
      setButtonDisabled(true);
    
      if (validateInputs()) {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
    
          await updateProfile(userCredential.user, {
            displayName: name,
          });
    
          alert("Реєстрація успішна!");
        } catch (error) {
          alert("Помилка реєстрації: " + error.message);
        } finally {
          setLoading(false);
          setButtonDisabled(false);
        }

        setLoading(false);
        setButtonDisabled(false);
      }
    };

    return (
      <Container>
        <h2>Реєстрація</h2>
        <form>
          <Container className="form-group">
            <label htmlFor="name">Ім'я користувача</label>
            <input
              type="text"
              id="name"
              placeholder="Введіть повне ім'я"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Container>
          <Container className="form-group">
            <label htmlFor="email">Електронна пошта</label>
            <input
              type="email"
              id="email"
              placeholder="Введіть ел. пошту"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Container>
          <Container className="form-group password-group">
          <label htmlFor="password">Пароль</label>
          <Container className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Введіть пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <>
              {showPassword ? (
                <>
                  <Visibility className="visibility"  onClick={() => setShowPassword(false)} />
                </>
              ) : (
                <>
                  <VisibilityOff className="visibility" onClick={() => setShowPassword(true)} />
                </>
              )}
            </>
          </Container>
        </Container>
        <Container className="btn-wrapper">
            <button type="submit"
              className="btn"
              isLoading={loading}
              onClick={handelSignUp}
            >
              Зареєструватися
            </button>
            <>
              {loading && (
                <CircularProgress className="circular-progress signUp-spec"
                  style={{  width: "18px", height: "18px", color: "white"}}
                />
              )}
            </>
          </Container>
        </form>
      </Container>
    );
  };

  export default SignUp;