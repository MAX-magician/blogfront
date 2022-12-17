import React from "react";
import "../style/header.css";
import axios from "axios";
import config from "../var";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {
    menuLi: ["首页", "分类", "测试"],
    menuLiUrl: ["/", "/page/class", "/page/test"],
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
  nologin = () => {
    return (
      <Link className="noLoginButton" to="/Login">
        登录/注册
      </Link>
    );
  };
  render() {
    return (
      <header>
        <ul className="headerUlMenu">
          {this.state.menuLi.map((item, index) => {
            return (
              <li key={index}>
                <a className="headerLiA" href={this.state.menuLiUrl[index]}>{item}</a>
              </li>
            );
          })}
        </ul>
        <div className="UserInfoLogin">{this.nologin()}</div>
        {/* <Route path="/page/Login" /> */}
      </header>
    );
  }
}

export default Header;
