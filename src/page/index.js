import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import "../style/index.css";
class Index extends React.Component {
  state = {
    essayList: [],
  };
  getEssayList = async () => {
    await axios
      .get("http://127.0.0.1:4523/m1/1899648-0-default/essayList/1")
      .then((res) => {
        this.setState({
          essayList: res.data.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  componentDidMount() {
    this.getEssayList();
  }
  essaySearch = (e) => {
    axios.get()
  };
  render() {
    let x;
    let y = this.state.essayList;
    if (y.length > 0) {
      x = y.map((item) => {
        return (
          <div key={item.id}>
            <h3>
              <Link to={item.url}>标题</Link>
            </h3>
            <div>
              发布人: <span>xxx</span> 时间: <span>xxxx-xx-xx xx:xx</span>
            </div>
            <div>{item.abstract}</div>
            <Link to={item.url}>查看详情 &gt;&gt;</Link>
          </div>
        );
      });
    } else {
      x = <span>空</span>;
    }
    return (
      <>
        <div className="essayMainDiv">
          <div className="essayListMainDiv">{x}</div>
          <div className="essayRightMainDiv">
            <div className="essayRightDiv indexSearchDiv">
              <div>搜索</div>
              <div onClick={this.essaySearch}>
                <input type="text" />
                <div>→</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Index;
