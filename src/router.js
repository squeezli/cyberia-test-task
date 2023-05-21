import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Projects } from "./pages/projects/projects.jsx";
import { Page404 } from "./pages/page404/page404.jsx";
import { Placeholder } from "./pages/plaseholder/plaseholder.jsx";

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<Placeholder />} />
      <Route path="/services" element={<Placeholder />} />
      <Route path="/blog" element={<Placeholder />} />
      <Route path="/contacts" element={<Placeholder />} />
      <Route path="/team" element={<Placeholder />} />
      <Route path="/" element={<Placeholder />} />
      <Route exact path="/*" element={<Page404 /> }  render={()=>null}/>
    </Routes>
  );
};
