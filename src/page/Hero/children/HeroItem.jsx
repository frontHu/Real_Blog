import React, { Component } from "react";
import "./../scss/heroItem.scss";

class HeroItem extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="heroItem">
        <div className="heroItem-avatar">
          <img src="https://avatars2.githubusercontent.com/u/19966486?s=460&v=4" alt=""/>
        </div>
        <div className="nickname">小凯</div>
        <div className="heroItem-desc">小凯，TF的好同事，学习快，能力强，极具潜力的前端开发工程师。</div>
        <div className="heroItem-link">
          <a href="" className="hero-link_blog">博</a>
          <a href="" className="hero-link_git">git</a>
        </div>
      </div>
    )
  }
}

export default HeroItem;