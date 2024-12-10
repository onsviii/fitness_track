import React, {useState} from "react";
import './Authentication.css'

const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const validateInputs = () => {
      if (!email || !password) {
        alert("Please fill in all fields");
        return false;
      }
      return true;
    };
  
    const handelSignIn = async () => {
      setLoading(true);
      setButtonDisabled(true);
      if (validateInputs()) {
        /*await UserSignIn({ email, password })
          .then((res) => {
            dispatch(loginSuccess(res.data));
            alert("Login Success");
            setLoading(false);
            setButtonDisabled(false);
          })
          .catch((err) => {
            alert(err.response.data.message);
            setLoading(false);
            setButtonDisabled(false);
          });*/
      }
    };

    return (
      <div className="auth-container">
        <h2>Вхід</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Електронна пошта</label>
            <input type="email" id="email" placeholder="Ввеідть ел. пошту" />
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

  export default SignIn;