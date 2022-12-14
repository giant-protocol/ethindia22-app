import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LightTheme } from "./utils/theme";
import { ThemeProvider } from "@mui/material";
import { AppProvider } from "./context/app.context";
import { Web3ReactProvider } from "@web3-react/core";
import { metaMask, metamaskHooks } from "./connectors/Metamask";

const root = ReactDOM.createRoot(document.getElementById("root"));
const connectors = [[metaMask, metamaskHooks]];
root.render(
  <React.StrictMode>
    <Web3ReactProvider connectors={connectors}>
      <ThemeProvider theme={LightTheme}>
        <AppProvider>
          <App />
        </AppProvider>
      </ThemeProvider>
    </Web3ReactProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
