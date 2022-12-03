import React from "react";
import Header from "./header";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../routes/AppRouters";

const Layout = () => {
  return (
    <div>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </div>
  );
};

export default Layout;
