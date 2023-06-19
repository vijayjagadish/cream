import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const HomepageTwo = React.lazy(() => import("pages/HomepageTwo"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const HomepageOne = React.lazy(() => import("pages/HomepageOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomepageOne />} />
          <Route path="/about" element={<Homepage />} />
          <Route path="/contact" element={<HomepageTwo />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
