import React, { Component } from "react";
import "./scss/header.scss";

class Header extends Component {
  constructor(props) {
    super(props)
  } 

  componentDidMount() {
    let header = document.querySelector(".headerPage");
    let doc = document.documentElement || document.body;
    window.addEventListener('scroll', () => {
      if(doc.scrollTop >= 100) {
        header.style.background = "rgba(0,0,0,0.3)";
      }else {
        header.style.background = "none";
      }
    },false)
  }

  render() {
    return (
      <div className="headerPage">
        <div className="headerPage-header">
          <ul className="headerPage-header_list">
            <li>首页<span></span></li>
            <li>博客<span></span></li>
            <li>造飞船<span></span></li>
            <li>资源<span></span></li>
            <li>留言<span></span></li>
            <li>友情链接<span></span></li>
          </ul>
          <div className="headerPage-header-avatar">
            <img src={require("./images/zy.png")} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Header;