import React from "react";
import "../style/footer.css";
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <div>Copyright © 2022-2023 魔术师的代码日志</div>
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37091102000563"
          >
            <img src="https://magic001.top/glogo.png" />
            <p>鲁公网安备 37091102000563号</p>
          </a>
          <div>
            <a href="http://beian.miit.gov.cn/" target="_blank">
              鲁ICP备 2022035075号-1
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
