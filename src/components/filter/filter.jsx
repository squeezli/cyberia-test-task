import "./filter.css";

export const Filter = (props) => {
  const buttons = document.querySelectorAll("button.filter__button");
  const buttonHandler = (e, category) => {
    props.category == category
      ? props.setCategory(null)
      : props.setCategory(category);

    if (e.currentTarget.className == "filter__button active") {
      e.currentTarget.classList.remove("active");
    } else {
      buttons.forEach((element) => {
        element.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    }
  };

  return (
    <section className="filter">
      <div className="container">
        <div className="filter__wrapper wrapper">
          <h2>Filter</h2>
          <div className="filter__categories">
            {props.categories.map((category, index) => (
              <button
                key={index}
                value={category}
                className="filter__button"
                onClick={(e) => buttonHandler(e, category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
