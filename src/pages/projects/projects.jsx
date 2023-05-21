import React from 'react'
import { BreadCrumbs } from "../../components/breadCrumbs/breadCrumbs";
import { Filter } from "../../components/filter/filter";

export const Projects = () => {
    const categories = ['frontend', 'backend', 'design', 'development']
    const [category, setCategory] = React.useState('');
  return (
    <>
      <BreadCrumbs />
      <section className="projects">
        <div className="container">
          <div className="project__wrapper wrapper">
            <h1 className="title">Проекты</h1>

            <Filter categories={categories} category={category} setCategory={setCategory}/>
            <div>Text: {category}</div>

          </div>
        </div>
      </section>
    </>
  );
};
