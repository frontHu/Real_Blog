import React, { Component } from "react";
import "./scss/hero.scss";
import HeroItem from "./children/HeroItem";
import { LayoutWrapper } from './../../untils/LayoutWrapper'

class Hero extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="heroPage moveIn">
        <div className="heroPage-banner">
          <div className="heroPage-title">
            {/* <Link href="" className="heroPage-back">回到首页</Link> */}
            <h1>前端盆友圈</h1>
          </div>
        </div>
        <div className="heroPage-main">
          <HeroItem />
        </div>
      </div>
    )
  }
}

export default LayoutWrapper(window.location.pathname)(Hero);