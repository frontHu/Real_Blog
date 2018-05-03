import React , { Component } from "react";
import "./scss/comment.scss";
import Message from "./children/Message";

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
              <Message />
            </div>
            <div className="commentPage-content-r"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment;