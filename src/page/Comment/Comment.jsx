import React , { Component } from "react";
import "./scss/comment.scss";
import Message from "./children/Message";
import Github from "./children/Github";
import Pagination from "./../../component/Pagination/Pagination";
import { LayoutWrapper } from './../../untils/LayoutWrapper';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as commentActions from './../../redux/action/comment.action'
import Modalbox from 'simple-modal-react'
import { Input, Modal } from 'antd'

@connect()
class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      name: '',
      email: '',
      website: '',
      v: ''
    }
    this.actions = bindActionCreators(Object.assign({}, commentActions), props.dispatch)
  }

  componentDidMount() {
    this.actions.getCommentList({currentPage: 1}).then(rs => {
    })
  }

  inputInfo(type, v) {
    this.setState({[type]: v })
  }

  onOk() {
    let { name, email, website } = this.state
    if(!name || !email || !website) {
      
    }
    this.setState({
      isOpen: false
    })
  }

  onCancel() {
    this.setState({
      isOpen: false
    })
  }

  submit() {
    let userinfo = window.localStorage.getItem('userinfo')
    if(userinfo) {

    }else {
      this.setState({
        isOpen: true
      })
    }
  }

  render() {
    return (
      <div className="commentPage moveIn">
        <Modalbox
          title="留下大名" 
          isOpen={this.state.isOpen}
          onOk={this.onOk.bind(this)}
          onCancel={this.onCancel.bind(this)}
        >
          <Input 
            onChange={(e) => {this.inputInfo('name', e.target.value)}} 
            placeholder="Your Name" 
            value={this.state.name}
            style={{marginBottom: 20}}
          />
          <Input 
            onChange={e=>{this.inputInfo('email', e.target.value)}} 
            value={this.state.email} 
            placeholder="Your Email" 
            style={{marginBottom: 20}}
          />
          <Input 
            onChange={e=>{this.inputInfo('website', e.target.value)}} 
            value={this.state.website} 
            placeholder="Your Website" 
            style={{marginBottom: 20}}
          />
        </Modalbox>
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
                <button onClick={this.submit.bind(this)}>发布</button>
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