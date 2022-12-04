import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import "./App.css";
import { metaMask } from "./connectors/Metamask";
import ethindiaContractService from "./ethereum/contract/ethindiaContractService";
import Layout from "./layout";
import { Buffer } from 'buffer';
import { Chat } from "@pushprotocol/uiweb";
global.Buffer = Buffer;

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
      <Chat
          account={account} //user address
          supportAddress="0x593f63f616a9EE5875decDbD83042F61f41199Fc" //support address
          apiKey={process.env.REACT_APP_PUSH_API_KEY}
          env="staging"
          modalTitle="DePay help desk"
        />
    </div>
  );
}

export default App;
