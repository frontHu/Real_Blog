import React , { Component } from "react"
import "./../scss/message.scss";
import { format } from './../../../untils/format';
import Modalbox from './../../../common/Modal';
import { Input, message } from 'antd';
const { TextArea  } = Input;

class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isReply: false,
      replyForId: '',
      replyForName: '' 
    }
  }

  reply(props) {
    let userinfo = JSON.parse(window.localStorage.getItem('userinfo'))
    if(userinfo) {
      this.setState({
        isReply: true,
        replyForId: props._id,
        replyForName: props.name
      })
    }else {
      this.props.openLogin(true)
    }
  }

  onOk() {
    if(!this.state.replyContent) {
      message.warn('写点啥呀')
      return
    }
    let userinfo = JSON.parse(window.localStorage.getItem('userinfo'))
    let obj = {
      name: userinfo.name,
      email: userinfo.email,
      website: userinfo.website,
      comment: `@${this.state.replyForName} ${this.state.replyContent}`,
      replyForId: this.state.replyForId
    }
    this.props.setLoaing(true)
    this.props.subComment(obj).then(res => {
      message.success("兄嘚，棒棒哒")
      this.props.getList()
      this.props.setLoaing(false)
      this.setState({
        replyContent: '',
        isReply: false
      })
    })
  }

  onCancel() {
    this.setState({
      isReply: false,
      replyContent: ''
    })
  }

  render() {
    return (
      <div className="messagePage">
        <div className="messagePage-user">
          <div className="messagePage-user-avatar">
            <img src={require(`./../images/${this.props.index % 25 }.png`)} alt=""/>
          </div>
          <div className="messagePage-user-info">
            <span className="messagePage-user-info-name">{this.props.data.name}</span>
            <div className="messagePage-user-info-time">{format(this.props.data.time)}</div>
          </div>
        </div>
        <p className="messagePage-text">
          {this.props.data.comment}
        </p>
        <div className="messagePage-action">
          <div className="messagePage-action-replay" onClick={this.reply.bind(this, this.props.data)}>回复</div>
        </div>
        <Modalbox
          title={`回复：${this.state.replyForName}`}
          isOpen={this.state.isReply}
          onOk={this.onOk.bind(this)}
          onCancel={this.onCancel.bind(this)}
        >
          <TextArea
            style={{resize: 'none'}}
            value={this.state.replyContent} 
            onChange={(e) => {this.setState({replyContent: e.target.value})}}
          ></TextArea>
        </Modalbox>
      </div>
    )
  }
}

export default Message;