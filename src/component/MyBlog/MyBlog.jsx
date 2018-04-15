import React, { Component } from "react";
import BlogItem from "./children/BlogItem"
import "./scss/myBlog.scss";

class MyBlog extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="myBlog">
        <div className="myBlog-left">
        <BlogItem></BlogItem>
        <BlogItem></BlogItem>
        <BlogItem></BlogItem>
        <BlogItem></BlogItem>
        </div>
        <div className="myBlog-right">1</div>
      </div>
    )
  }
}

export default MyBlog;