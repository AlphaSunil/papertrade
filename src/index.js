import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tw-elements";
import App from "./App";
import CryptoContext from "./Config/CryptoContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <CryptoContext>
      <App />
    </CryptoContext>
  </HashRouter>
);
