import React , { Component } from "react";
import "./scss/comment.scss";
import Message from "./children/Message";
import Github from "./children/Github";

class Comment extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="commentPage">
        <div className="commentPage-banner">
          <div className="commentPage-chat">
            <div className="commentPage-chat-box">
              <div className="commentPage-chat-avatar">
                <img src={require('./images/avatar.png')} alt=""/>
              </div>
              <div className="commentPage-chat-input">
                <textarea></textarea>
              </div>
              <div className="commentPage-chat-sub">
                <button>发布</button>
              </div>
            </div>
          </div>
        </div>
        <div className="commentPage-main">
          <div className="commentPage-content">
            <div className="commentPage-content-l">
              <Message /><Message /><Message />
            </div>
            <div className="commentPage-content-r">
            <Github />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment;