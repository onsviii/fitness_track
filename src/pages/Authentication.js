import React, { useState } from "react";
import SignIn from "../components/Authentication/SignIn";
import SignUp from "../components/Authentication/SignUp";
import "../components/Authentication/Authentication.css";

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="page-container">
      {isSignUp ? <SignUp /> : <SignIn />}
      <button 
        onClick={() => setIsSignUp(!isSignUp)} 
        className="switch-btn"
      >
        {isSignUp ? "У мене вже є акаунт" : "Зареєструватися"}
      </button>
    </div>
  );
};

export default Authentication;
