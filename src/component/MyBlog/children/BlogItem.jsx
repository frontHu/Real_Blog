import React, { Component } from "react";
import "./../scss/blogItem.scss";

class BlogItem extends Component {

  render() {
    return (
      <div className="blogItemPage">
        <div className="blogItemPage-main">
          {
            this.props.is ?
            <img className="blogItemPage_img" src={require("./../images/b.png")} alt="" />:null
          }
          <div className="blogItemPage-desc">
            <h1>简单的记录一下</h1>
            <p>伴随着移动端的发展，触摸交互的手势也越来越丰富，从起初最简单的点击发展到现在的长按、侧滑、拖动等。</p>
          </div>
          <div className="blogItemPage-tag">
            <div className="blogItemPage-tag_comment"></div>
            <div className="blogItemPage-tag_see"></div>
            <div className="blogItem-tag_time"> 2019-10-20</div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogItem;