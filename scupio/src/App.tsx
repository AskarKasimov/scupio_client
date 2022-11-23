import "./App.scss";

import { Link } from "react-router-dom";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    document.title += " Авторизация"
  }, []);
  return (
    <div className="authorization">
      <h2 className="scupio">scup<strong>io</strong></h2>
      <div className="container">
        <h1 className="title">Вход</h1>
        <form className="sign-in-form">
          <input type="text" placeholder="Логин" />
          <input type="password" placeholder="Пароль" />
          <input className="submit" type="submit" value="Войти" />
        </form>
        <p className="or">или</p>
        <Link className="sign-up" to="/sign-up">Зарегестрироваться</Link>
      </div>
    </div>
  );
}

export default App;
