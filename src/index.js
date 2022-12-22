import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./style/mainIndex.css";
// import Login from "./page/Login";
import Header from "./page/Header";
import Body from "./page/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <>
    <BrowserRouter>
      <Header />
      <Body />
    </BrowserRouter>
  </>
  // </React.StrictMode>
);
