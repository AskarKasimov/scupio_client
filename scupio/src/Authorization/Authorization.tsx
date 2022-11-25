import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Authorization.scss"

function Authorization() {
  useEffect(() => {
    document.title = "scupio - Вход"
  }, []);

  function handleAuthorization(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <h1 className="title">Вход</h1>
      <form className="sign-in-form" onSubmit={handleAuthorization}>
        <input type="email" placeholder="Почта" />
        <input type="password" placeholder="Пароль" />
        <input className="submit" type="submit" value="Войти" />
      </form>
      <p className="or">или</p>
      <Link className="sign-up" to="/sign-up">Зарегестрироваться</Link>
    </>
  );
}

export default Authorization;