import React, { Component } from "react";
import "./scss/hero.scss";
import HeroItem from "./children/HeroItem";
import { LayoutWrapper } from './../../untils/LayoutWrapper'

class Hero extends Component {

  render() {
    return (
      <div className="heroPage moveIn">
        <div className="heroPage-banner">
          <div className="heroPage-title">
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