import "./breadCrumbs.css";
import { useLocation, Link } from "react-router-dom";

const translation = {
  about: "О нас",
  contacts: "Контакты",
  blog: "Блог",
  services: "Услуги",
  projects: "Проекты",
  team: "Команда",
  vacancy: "Вакансии",
};

export const BreadCrumbs = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter((el) => el !== "");
  const links = pathParts.map((el, index) => {
    const url = `${pathParts.slice(0, index + 1).join("/")}`;
    const label = translation[el] || el;
    return { url, label };
  });

  return (
    <div className="container">
      <div className="breadcrumbs">
        {links.length > 0 && (
          <span>
            {" "}
            <Link to="/" className="breadcrumbs__item breadcrumbs__item-link link">
              Главная
            </Link>
            
          </span>
        )}

        {links.map((link, index) => {
          const isLast = index === links.length - 1;
          return isLast ? (
            <span className="breadcrumbs__item breadcrumbs__item-last">
              {link.label}
            </span>
          ) : (
            <span>
              <Link className="breadcrumbs__item breadcrumbs__item-link link" to={link.url}>
                {link.label}
              </Link>
              
            </span>
          );
        })}
      </div>
    </div>
  );
};
