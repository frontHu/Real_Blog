import React, { Component } from "react";
import "./../scss/blogItem.scss";
import { format } from './../../../untils/format'
import {hashHistory} from "react-router"

class BlogItem extends Component {

  goArticle() {
    hashHistory.push('/artical/123')
  }

  render() {
    return (
      <div className="blogItemPage" onClick={this.goArticle.bind(this, this.props._id)}>
        <div className="blogItemPage-main">
          {
            this.props.imgUrl ?
              <img className="blogItemPage_img" src={this.props.imgUrl} alt="" /> : null
          }
          <div className="blogItemPage-desc">
            <h1>{this.props.title}{this.props.i}</h1>
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