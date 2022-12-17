import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./style/index.css";
// import Login from "./page/Login";
import Header from "./page/Header";
import Body from "./page/Body";
import Footer from "./page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Body />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
