import React , { Component } from "react"
import "./../scss/message.scss";

class Message extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="messagePage">
        <div className="messagePage-user">
          <div className="messagePage-user-avatar"></div>
          <div className="messagePage-user-info">
            <span className="messagePage-user-info-name">huzhiwie</span>
            <div className="messagePage-user-info-time">2017-09-09</div>
          </div>
        </div>
        <div className="messagePage-text">
          @christinewang  感谢你为Mofei的博客的繁荣昌盛做出的贡献[偷笑]
        </div>
        <div className="messagePage-action">
          <div className="messagePage-action-replay">回复</div>
        </div>
      </div>
    )
  }
}

export default Message;