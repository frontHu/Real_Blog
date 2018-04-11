import React, { Component } from "react";
import BlogItem from "./children/BlogItem"

class MyBlog extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="myBlog">
        <BlogItem></BlogItem>
      </div>
    )
  }
}

export default MyBlog;