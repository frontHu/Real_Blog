import React, { Component } from "react";
import "./scss/blogPage.scss";

class BlogPage extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      
    }, false)
  }

  render() {
    return (
      <div className="blogPage">
        <div className="blogPage-banner">
          <div className="blogPage-banner-text">
            <p className="blogPage-banner_big">Hey There.</p>
            <p className="blogPage-banner_small">base in Hefei.</p>
            <p className="blogPage-banner_big">Just Another Front-end Engineer.</p>
            <p className="blogPage-banner_small">But Lazy.</p>
          </div>
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