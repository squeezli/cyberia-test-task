import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import logo from "../../assets/images/logo.svg";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container ">
      <div className="header__wrapper wrapper"> 
        <div className="header__logo">
          <Link to="/" className="logo__link link">
            <ReactSVG src={logo} />
          </Link>
        </div>

        <nav className="nav">
          <ul className="nav__list header__nav__list">
            <li className="nav__item">
              <Link className="nav__link link" to="/about">
                О нас
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link link" to="/services">
                Услуги
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link link" to="/projects">
                Проекты
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link link" to="/blog">
                Блог
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link link" to="/contacts">
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  );
};
