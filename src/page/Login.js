import React, { Component } from 'react'
import axios from "axios";
import config from "../var";
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
  checkLogin = (e) => {
    axios
      .get(config.server + "/users/getUserInfo", {})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  essayUpdate = (e) => {
    this.setState({
      textareaEssay: e.target.value,
    });
  }
  essayClick = (e) => {
    e.preventDefault();
    axios
      .post(config.server + "/essay/update", {
        // 参数名: 参数值
        content: this.state.textareaEssay
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
      <>
        <form method="post" action="localhost:3000/users/login">
          账号{" "}
          <input
            type="text"
            id="username"
            onChange={(e) => this.usernameChange(e)}
          />
          <br />
          密码{" "}
          <input
            type="password"
            id="password"
            onChange={(e) => this.passwordChange(e)}
          />
          <br />
          <button type="submit" id="submit" onClick={this.loginSubmit}>
            登录
          </button>
          <button type="button" id="checkLogin" onClick={this.checkLogin}>
            检查登录状态
          </button>
        </form>
        内容： <textarea onChange={this.essayUpdate}></textarea>
        <button type="button" onClick={this.essayClick}>发布</button>
      </>
    );
  }
}
export default Login;
