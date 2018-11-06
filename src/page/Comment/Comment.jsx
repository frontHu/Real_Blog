import React , { Component } from "react";
import "./scss/comment.scss";
import Message from "./children/Message";
import Github from "./children/Github";
import Pagination from "./../../component/Pagination/Pagination";
import { LayoutWrapper } from './../../untils/LayoutWrapper';
import ModalBox from './../../component/Modal'

class Comment extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="commentPage moveIn">
        <div className="commentPage-banner">
          <div className="commentPage-chat grid-row"> 
            <div className="commentPage-chat-box">
              <div className="commentPage-chat-avatar">
                <img src={require('./images/avatar.png')} alt=""/>
              </div>
              <div className="commentPage-chat-input">
                <textarea placeholder='留言功能还木有完成，骚等'></textarea>
              </div>
              <div className="commentPage-chat-sub">
                <button>发布</button>
              </div>
            </div>
          </div>
        </div>
        <div className="commentPage-main grid-row">
          <div className="commentPage-content">
            <div className="commentPage-content-l">
              <Message />
              <Message />
              <Message />
              <Pagination></Pagination>
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

export default LayoutWrapper(window.location.pathname)(Comment);