import React, { Component } from "react";
import "./../scss/blogItem.scss";

class BlogItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="blogItemPage">
        <div className="blogItemPage-image">
          <img src={require("./../images/b.png")} alt="" />
        </div>
        <div className="blogItemPage-info">
          <h1 className="blogItemPage-info_title">REACT生命周期</h1>
          <div className="blogItemPage-info_desc">
            <p>这是react生命周期</p>
          </div>
          <div className="blogItemPage-info_box">
            <div className="blogItemPage-info_time">2017-10-20</div>
            <div className="blogItemPage-info_tag">React</div>
            <div className="blogItemPage-info_comment"></div>
            <div className="blogItemPage-info_see">10</div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogItem;