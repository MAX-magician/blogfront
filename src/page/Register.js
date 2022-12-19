import { Component } from "react";
import "../style/register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../var";

class Register extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    repasswdstyle: {
      border: "none",
    },
    regibutton: true,
  };
  usernameFun = (e) => {
    this.setState({
      username: e.target.value.toString(),
    });
  };
  passwordFun = (e) => {
    this.setState({
      password: e.target.value.toString(),
    });
  };
  repasswordFun = (e) => {
    if (e.target.value.toString() !== this.state.password) {
      this.setState({
        repasswdstyle: {
          border: "1px solid red",
        },
        regibutton: true,
      });
    } else {
      this.setState({
        repasswdstyle: {
          border: "none",
        },
        regibutton: false,
      });
    }
  };
  emailFun = (e) => {
    this.setState({
      email: e.target.value.toString(),
    });
  };
  regiSubmit = (e) => {
    e.preventDefault();
    axios
      .post(config.server + "/users/register", {
        // 参数名: 参数值
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
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
      <div className="registerDivMain">
        <div className="registerDiv">
          <div></div>
          <div>
            <h2>用户注册</h2>
            <div>
              <span>用户名</span>
              <input type="text" onChange={this.usernameFun} />
            </div>
            <div>
              <span>密码</span>
              <input type="password" onChange={this.passwordFun} />
            </div>
            <div>
              <span>确认密码</span>
              <input
                type="password"
                style={this.state.repasswdstyle}
                onChange={this.repasswordFun}
              />
            </div>
            <div>
              <span>邮箱</span>
              <input type="text" onChange={this.emailFun} />
            </div>
            <div>
              <Link id="regitLogin" to="/login">
                返回登录
              </Link>
              <div
                id="submitRegi"
                onClick={this.regiSubmit}
                disabled={this.state.regibutton}
              >
                注册
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
