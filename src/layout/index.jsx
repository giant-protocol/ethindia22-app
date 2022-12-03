import React from "react";
import Header from "./header";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../routes/AppRouters";
import ContactsModal from "../components/modal/contactsmodal";

const Layout = () => {
  return (
    <div>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
      <ContactsModal />
    </div>
  );
};

export default Layout;
