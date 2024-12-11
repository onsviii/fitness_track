import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { CircularProgress } from '@mui/material';
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
          <button
            type="submit"
            className="btn"
            isLoading={loading}
            isDisabled={buttonDisabled}
            onClick={handleSignIn}
          >
            Увійти
          </button>
          <>
            {loading && (
              <CircularProgress className="circular-progress signIn-spec"
                style={{  width: "18px", height: "18px", color: "white"}}
              />
            )}
          </>
        </Container>
      </form>
    </Container>
  );
};

export default SignIn;
