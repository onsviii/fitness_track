import React, { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

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