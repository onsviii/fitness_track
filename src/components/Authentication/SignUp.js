import React, {useState} from "react";
import './Authentication.css'

const SignUp = () => {
    //const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const validateInputs = () => {
      if (!name || !email || !password) {
        alert("Please fill in all fields");
        return false;
      }
      return true;
    };
  
    const handelSignUp = async () => {
      setLoading(true);
      setButtonDisabled(true);
      if (validateInputs()) {
        /*await UserSignUp({ name, email, password })
          .then((res) => {
            dispatch(loginSuccess(res.data));
            alert("Account Created Success");
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
        <h2>Реєстрація</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Ім'я користувача</label>
            <input type="text" id="username" placeholder="Введіть ім'я" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Електронна пошта</label>
            <input type="email" id="email" placeholder="Введіть ел. пошту" />
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