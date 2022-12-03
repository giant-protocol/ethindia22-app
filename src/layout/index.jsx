import React from "react";
import Header from "./header";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../routes/AppRouters";
import ContactsModal from "../components/modal/contactsmodal";
import TokensModal from "../components/modal/tokensmodal";
import ApproveModal from "../components/modal/approvemodal";

const Layout = () => {
  return (
    <div>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
      <ContactsModal />
      <TokensModal />
      <ApproveModal />
    </div>
  );
};

export default Layout;
