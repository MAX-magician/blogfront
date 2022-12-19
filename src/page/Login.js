import React, { Component } from "react";
import axios from "axios";
import config from "../var";
import { Link } from "react-router-dom";
import "../style/login.css";
axios.defaults.withCredentials = true; // 跨域

class Login extends Component {
  state = {
    LoginValue: "",
    PassWordValue: "",
    textareaEssay: "",
  };
  usernameChange = (e) => {
    this.setState({
      LoginValue: e.target.value,
    });
  };
  passwordChange = (e) => {
    this.setState({
      PassWordValue: e.target.value,
    });
  };
  loginSubmit = (e) => {
    e.preventDefault();
    axios
      .post(config.server + "/users/login", {
        // 参数名: 参数值
        username: this.state.LoginValue,
        password: this.state.PassWordValue,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  render() {
    return (
      <div className="loginFormMain">
        <div className="loginForm">
          <div>
            <div></div>
            <h2>用户登录</h2>
            <div>
              <span>账号:</span>
              <input
                type="text"
                id="username"
                onChange={(e) => this.usernameChange(e)}
              />
            </div>
            <div>
              <span>密码:</span>
              <input
                type="password"
                id="password"
                onChange={(e) => this.passwordChange(e)}
              />
            </div>
            <div>
              <div id="submit" onClick={this.loginSubmit}>
                登录
              </div>
              <Link id="loginRegit" to="/register">注册</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
