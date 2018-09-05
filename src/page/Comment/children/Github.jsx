import React, { Component } from "react";
import "./../scss/github.scss";

class Github extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="github">
        <div className="github-header">
          <div className="githuh-avatar">
            <img src={require("./../images/zy.png")} alt=""/>
          </div>
        </div>
        <div className="github-body">
          <p className="github-title">My Github</p>
          <button className="github-follow"><a href="https://github.com/frontHu" target='_blank'>Follow me</a></button>
        </div>
        {/* <div className="github-foot">
          <a href="">
            <strong>5</strong>
            <span>Followers</span>
          </a>
          <a href="">
            <strong>111</strong>
            <span>Followers</span>
          </a>
          <a href="">
            <strong>111</strong>
            <span>Followers</span>
          </a>
        </div> */}
      </div>
    )
  }
}

export default Github;