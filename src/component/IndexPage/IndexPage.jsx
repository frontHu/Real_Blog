import React, { Component } from "react";
import "./scss/indexPage.scss";
import { Link } from "react-router";

class IndexPage extends Component {
  render() {
    return (
      <div className="indexPage">
        <div className="indexPage_cover"></div>
        <div className="indexPage_title">
          <p className="indexPage_title_cn">我来这里是为了逃避现实，但我发现了远比自己更重要的东西，我交到了许多朋友，我找到了真爱</p>
          <p>I came here to escape from reality, but I found something far more important than myself, and I made a lot of friends, and I found love.</p>
          <div className="indexPage_jump">
            <Link to="">关于此站</Link>
            <a>进入博客</a>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage;