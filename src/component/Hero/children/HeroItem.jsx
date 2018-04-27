import React, { Component } from "react";
import "./../scss/heroItem.scss";

class HeroItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="heroItem">
        <div className="heroItem-avatar"></div>
        <div className="nickname">hzw</div>
        <div className="heroItem-desc">122222</div>
        <div className="heroItem-link">
          <a href="" className="hero-link_blog">博</a>
          <a href="" className="hero-link_git">git</a>
        </div>
      </div>
    )
  }
}

export default HeroItem;