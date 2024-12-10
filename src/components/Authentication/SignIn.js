import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import {Visibility, VisibilityOff } from "@mui/icons-material";
import "./Authentication.css";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateInputs = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  const handleSignIn = async () => {
    setLoading(true);
    setButtonDisabled(true);
    if (validateInputs()) {
      // Ваш код авторизації
    }
  };

  return (
    <Container>
      <h2>Вхід</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Електронна пошта</label>
          <input
            type="email"
            id="email"
            placeholder="Введіть ел. пошту"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group password-group">
          <label htmlFor="password">Пароль</label>
          <div className="password-wrapper">
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
          </div>
        </div>
        <button
          type="submit"
          className="btn"
          disabled={buttonDisabled}
          onClick={handleSignIn}
        >
          Увійти
        </button>
      </form>
    </Container>
  );
};

export default SignIn;
