import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import logo from "../../assets/images/logo.svg";
import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper wrapper">
          <div className="footer__logo">
            <Link to="/" className="logo__link link">
              <ReactSVG src={logo} />
            </Link>
            <div className="footer__logo__text">
              Web and machine learning developing company
            </div>
          </div>
          <div className="footer__info">
            <a href="tel:+74996794579" className="link">
              +7 499 679 45 79
            </a>
            <a href="mailto:hello@cyberia.ru" className="link">
              hello@cyberia.ru
            </a>
            <p className="phone">Аносова 3Б, оф. 1</p>
          </div>
          <div className="footer__links">
            <ul className="nav__list footer__nav">
              <li className="nav__item">
                <Link to="/" className="nav__link link">
                  Главная
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/services" className="nav__link link">
                  Услуги
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/projects" className="nav__link link">
                  Проекты
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/blog" className="nav__link link">
                  Блог
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/about" className="nav__link link">
                  О нас
                </Link>
              </li>

              <li className="nav__item">
                <Link to="/team" className="nav__link link">
                  Команда
                </Link>
              </li>
            </ul>
          </div>
          <p className="footer__copyright">
            2022, digital-агентство Cyberia
            <br />
            <Link to="#" className="link">
              Положение о защите персональных данных
            </Link>
            <br />
            <Link to="#" className="link">
              Политика в отношении обработки и защиты персональных данных
            </Link>
            <br />
            <Link to="#" className="link">
              Оферта оказания услуг
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
