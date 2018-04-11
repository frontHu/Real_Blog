import React, { Component } from "react";
import "./scss/blogPage.scss";

class BlogPage extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="blogPage">
        <div className="blogPage-header">
          <ul className="blogPage-header_list">
            <li>首页<span></span></li>
            <li>博客<span></span></li>
            <li>造飞船<span></span></li>
            <li>资源<span></span></li>
            <li>留言<span></span></li>
            <li>友情链接<span></span></li>
          </ul>
          <div className="blogPage-header-avatar">
            <img src={require("./images/zy.png")} alt="" />
          </div>
        </div>
        <div className="blogPage-banner">
          <p></p>
        </div>
        <div className="blogPage-content">
          <div className="blogPage-block">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPage;