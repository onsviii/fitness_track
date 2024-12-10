import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import SignIn from "../components/Authentication/SignIn";
import SignUp from "../components/Authentication/SignUp";
import "../components/Authentication/Authentication.css";

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <Container >
      {isSignUp ? <SignUp /> : <SignIn />}
      <button 
        onClick={() => setIsSignUp(!isSignUp)} 
        className="switch-btn"
      >
        {isSignUp ? "У мене вже є акаунт" : "Зареєструватися"}
      </button>
    </Container>
  );
};

export default Authentication;
