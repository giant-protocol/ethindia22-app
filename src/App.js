import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import "./App.css";
import { metaMask } from "./connectors/Metamask";
import ethindiaContractService from "./ethereum/contract/ethindiaContractService";
import Layout from "./layout";

function App() {
  const isConnected = localStorage.getItem("isConnected");
  const { account, provider } = useWeb3React();

  useEffect(() => {
    if (isConnected === "true") {
      if (metaMask) {
        metaMask.connectEagerly();
      }
    }
  }, []);

  useEffect(() => {
    window.ethereum.on("accountsChanged", function (accounts) {
      window.location.reload();
    });
  }, []);

  useEffect(() => {
    if (account !== undefined && provider !== undefined) {
      ethindiaContractService.setup(provider);
    }
  }, [account, provider]);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
