import React , { Component } from "react"
import "./../scss/message.scss";
import { format } from './../../../untils/format';

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
            <span className="messagePage-user-info-name">{this.props.data.name}</span>
            <div className="messagePage-user-info-time">{format(this.props.data.time)}</div>
          </div>
        </div>
        <div className="messagePage-text">
          {this.props.data.comment}
        </div>
        <div className="messagePage-action">
          <div className="messagePage-action-replay">回复</div>
        </div>
      </div>
    )
  }
}

export default Message;