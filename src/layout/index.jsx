import React from "react";
import Header from "./header";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../routes/AppRouters";
import ContactsModal from "../components/modal/contactsmodal";
import TokensModal from "../components/modal/tokensmodal";

const Layout = () => {
  return (
    <div>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
      <ContactsModal />
      <TokensModal />
    </div>
  );
};

export default Layout;
