import React, { Component } from "react";
import { Route,Routes } from "react-router-dom";
import "../style/body.css";
import Login from "./Login";
import Index from "./index";
import Register from "./Register";

class Body extends Component {
  state = {
    BackTop: {
      display: "none",
    },
    CM: 0,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }
  handleScroll() {
    this.setState({
      CM: window.scrollY,
    });
    if (window.scrollY > 100) {
      this.setState({
        BackTop: {
          display: "block",
        },
      });
    } else {
      this.setState({
        BackTop: {
          display: "none",
        },
      });
    }
  }
  BackTopButton = () => {
    const oneChange = Math.floor(this.state.CM / 20);
    let timer = setInterval(() => {
      let x = this.state.CM - oneChange;
      document.body.scrollTop = document.documentElement.scrollTop = x;
      this.setState({
        CM: x,
      });
      if (this.state.CM < 50) {
        clearInterval(timer);
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.setState({
          CM: 0,
        });
      }
    }, 20);
  };
  render() {
    return (
      <div className="body">
        <div
          className="backTopButton"
          style={this.state.BackTop}
          onClick={this.BackTopButton}
        >
          ↑
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default Body;
