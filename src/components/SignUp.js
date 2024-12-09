import React, {useState} from "react";

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
            <input type="email" id="email" placeholder="Ввеідть ел. пошту" />
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

  export default SignUp;