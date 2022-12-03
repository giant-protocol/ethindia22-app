import { useEffect } from "react";
import "./App.css";
import { metaMask } from "./connectors/Metamask";
import Layout from "./layout";

function App() {
  const isConnected = localStorage.getItem("isConnected");

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

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
