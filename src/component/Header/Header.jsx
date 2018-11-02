import React, { Component } from "react";
import "./scss/header.scss";
import { Link, withRouter } from "react-router-dom";
import { Icon } from 'antd';
import $ from 'jquery'
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: false
    }
    this.navShow = false
  }
  componentDidMount() {
    let header = document.querySelector(".headerPage");
    let $headerNav = document.querySelector(".header-nav");
    let doc = document.documentElement || document.body;
    window.addEventListener('scroll', this.windowScroll.bind(this, doc, header), false);

    $headerNav.addEventListener("mouseenter", this.mouseEnter.bind(this), false);
    header.addEventListener("mouseenter", this.mouseEnter.bind(this), false);
    $headerNav.addEventListener("mouseleave", this.mouseOut.bind(this), false);
    header.addEventListener("mouseleave", this.mouseOut.bind(this), false);

    $('.nav-mask').click(()=> {
      $('.nav-mask').removeClass("nav-mask-show")
      this.navShow = false
    })
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

  navHandle() {
    this.navShow = !this.navShow
    if(this.navShow) {
      $('.nav-mask').addClass('nav-mask-show')
    }else {
      $('.nav-mask').removeClass('nav-mask-show')
    }
  }

  render() {
    return (
      <div className="header">
        <div className="header-nav">
          <div className="header-bar">
            <Icon onClick={this.navHandle.bind(this)} type="bars" theme="outlined" />
          </div>
          
          <div className="nav-mask">
            <div className="grid-row">
              <div className="nav-mask-list">
              <li><a href="/">首页</a><span></span></li>
              <li><a href="/blog">博客</a><span></span></li>
              <li><a href="/plane">造飞船</a><span></span></li>
              <li><a href="/about">关于我</a><span></span></li>
              <li><a href="/comment">留言</a><span></span></li>
              <li><a href="/hero">友情链接</a><span></span></li>
              </div>
            </div>
          </div>
        </div>
        <div className="headerPage">
          <div className="headerPage-header grid-row">
            <ul className="headerPage-header_list">
              <li><a href="/">首页</a><span></span></li>
              <li><a href="/blog">博客</a><span></span></li>
              <li><a href="/plane">造飞船</a><span></span></li>
              <li><a href="/about">关于我</a><span></span></li>
              <li><a href="/comment">留言</a><span></span></li>
              <li><a href="/hero">友情链接</a><span></span></li>
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