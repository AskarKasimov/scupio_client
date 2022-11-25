import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Registration.scss";

function Registration() {
  useEffect(() => {
    document.title = "scupio - Регистрация"
  }, []);

  function handleRegistration(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <h1 className="title">Регистрация</h1>
      <form className="sign-up-form" onSubmit={handleRegistration}>
        <input type="text" placeholder="ФИО" />
        <input type="email" placeholder="Почта" />
        <input type="password" placeholder="Пароль" />
        <input className="submit" type="submit" value="Зарегистрироваться" />
      </form>
      <p className="or">или</p>
      <Link className="sign-in" to="/">Войти</Link>
    </>
  );
}

export default Registration;