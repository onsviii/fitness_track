import React, { useState } from "react";

const SignUp = () => {
  return (
    <div className="auth-container">
      <h2>Реєстрація</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Ім'я користувача</label>
          <input type="text" id="username" placeholder="Введіть ім'я" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Електронна пошта</label>
          <input type="email" id="email" placeholder="example@mail.com" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" placeholder="Введіть пароль" />
        </div>
        <button type="submit" className="btn">Зареєструватися</button>
      </form>
    </div>
  );
};

const SignIn = () => {
  return (
    <div className="auth-container">
      <h2>Вхід</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Електронна пошта</label>
          <input type="email" id="email" placeholder="example@mail.com" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" placeholder="Введіть пароль" />
        </div>
        <button type="submit" className="btn">Увійти</button>
      </form>
    </div>
  );
};

const Auth = () => {
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

export default Auth;
