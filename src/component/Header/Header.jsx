import React, { Component } from "react";
import "./scss/header.scss";
import { Link } from "react-router";

class Header extends Component {
  componentDidMount() {
    let header = document.querySelector(".headerPage");
    let $headerNav = document.querySelector(".header-nav");
    let doc = document.documentElement || document.body;
    window.addEventListener('scroll', this.windowScroll.bind(this, doc, header), false);

    $headerNav.addEventListener("mouseenter", this.mouseEnter.bind(this), false);
    header.addEventListener("mouseenter", this.mouseEnter.bind(this), false);
    $headerNav.addEventListener("mouseleave", this.mouseOut.bind(this), false);
    header.addEventListener("mouseleave", this.mouseOut.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.windowScroll.bind(this), false);
  }

  mouseEnter() {
    let header = document.querySelector(".headerPage"); 
    header.style.top = "0px";
    header.style.opacity = "1";
  }

  mouseOut() {
    let header = document.querySelector(".headerPage"); 
    header.style.top = "-60px";
    header.style.opacity = "0";
  }

  windowScroll(doc, header) {
    if (doc.scrollTop >= 100) {
      header.style.top = "0px";
      header.style.opacity = "1";
    } else {
      header.style.top = "-60px";
      header.style.opacity = "0";
    }
  }

  render() {
    return (
      <div className="header">
        <nav className="header-nav"></nav>
        <div className="headerPage">
          <div className="headerPage-header">
            <ul className="headerPage-header_list">
              <li><Link to="/">首页</Link><span></span></li>
              <li><Link to="blog">博客</Link><span></span></li>
              <li><Link to="plane">造飞船</Link><span></span></li>
              <li><Link to="about">关于我</Link><span></span></li>
              <li><Link to="comment">留言</Link><span></span></li>
              <li><Link to="hero">友情链接</Link><span></span></li>
            </ul>
            <div className="headerPage-header-avatar">
              <img src={require("./images/zy.png")} alt="" />
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Header;