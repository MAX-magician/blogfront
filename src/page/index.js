import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
class Index extends React.Component {
  render() {
    return (
      <>
        <div>Index</div>
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
      </>
    );
  }
}

export default Index;
