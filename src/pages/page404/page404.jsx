import { Link } from "react-router-dom";
import './page404.css'

export const Page404 = () => {
  return (
    <section className="page404">
      <div className="container">
        <div className="page404__wrapper wrapper">

        <div className="page404__title">404</div>
        <div className="page404__text">Страница не найдена</div>
        <Link className="page404__button link" to={"/"}>
          Перейти на главную
        </Link>
        </div>
      </div>
    </section>
  );
};
