import React, { Component } from "react";
import "./../scss/blogItem.scss";
import { format } from './../../../untils/format';
import {hashHistory} from "react-router";
class BlogItem extends Component {

  goArticle(id) {
    hashHistory.push(`/artical/${id}`)
  }

  render() {
    return (
      <div style={{
        left: this.props.left || 0,
        top: this.props.top || 0
      }} className="blogItemPage grid-box" onClick={this.goArticle.bind(this, this.props._id)}>
        <div className="blogItemPage-main">
          <div className="blogItemPage_img_box">
            <img  className="blogItemPage_img" src={this.props.imgUrl || require(`./../../../assets/${this.props.i+1}.jpg`)} alt="" /> 
          </div>
          <div className="blogItemPage-desc">
            <h1>{this.props.title}</h1> 
            <p>{this.props.desc}</p>
          </div>
          <div className="blogItemPage-tag">
            <div className="blogItemPage-tag_comment"></div>
            <div className="blogItemPage-tag_see"></div>
            <div className="blogItem-tag_time">{format(this.props.createTime)}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogItem;