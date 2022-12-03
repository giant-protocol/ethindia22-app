import { useWeb3React } from "@web3-react/core";
import React from "react";
import Home from "../views /Home/Home";
import NotConnected from "../views /notconnected";
import Header from "./header/Header";

const Layout = () => {
  const { account } = useWeb3React();
  return (
    <div>
      <Header />
      {account ? <Home /> : <NotConnected />}
    </div>
  );
};

export default Layout;
