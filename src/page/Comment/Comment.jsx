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
import { Input, message } from 'antd'

@connect()
class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      name: '',
      email: '',
      website: '',
      currentPage: 1,
      pageSize: 5,
      totalCount: 0,
      list: []
    }
    this.actions = bindActionCreators(Object.assign({}, commentActions), props.dispatch)
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
    let params = {
      currentPage: this.state.currentPage,
      pageSize: this.state.pageSize
    }
    this.actions.getCommentList(params).then(res => {
      this.setState({
        totalCount: res.content.totalCount,
        list: res.content.list
      })
    })
  }

  inputInfo(type, v) {
    this.setState({[type]: v })
  }

  onOk() {
    let { name, email, website } = this.state
    if(!name || !email || !website) {
      message.warn('兄弟，写完整点呀')
      return
    }else {
      let obj = {
        name, email, website
      }
      window.localStorage.setItem('userinfo', JSON.stringify(obj))
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
    let userinfo = JSON.parse(window.localStorage.getItem('userinfo'))
    if(userinfo) {
      if(!this.state.comment) {
        message.warn('兄弟，写点啥呀')
        return
      }
      let obj = {
        name: userinfo.name,
        email: userinfo.email,
        website: userinfo.website,
        comment: this.state.comment
      }
      this.actions.subComment(obj).then(res => {
        this.setState({comment: ''})
        message.success('兄嘚，可以的')
        this.getList()
      })
    }else {
      this.setState({
        isOpen: true
      })
    }
  }

  onPageChange(currentPage, pageSize) {
    this.setState({
      currentPage: currentPage,
      pageSize: pageSize
    }, () => {
      this.getList()
    })
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
                <textarea 
                  value={this.state.comment} 
                  onChange={(e)=>{this.inputInfo('comment', e.target.value)}}
                  placeholder='留言功能正在进行中...回复功能暂未添加'
                ></textarea>
              </div>
              <div className="commentPage-chat-sub">
                <button onClick={this.submit.bind(this)}>给我提BUG</button>
              </div>
            </div>
          </div>
        </div>
        <div className="commentPage-main grid-row">
          <div className="commentPage-content">
            <div className="commentPage-content-l">
              {this.state.list.length > 0 ?this.state.list.map((v, i) => {
                return <Message data={v} key={i}></Message>
              }) : 
              <h1 style={{textAlign: 'center',color:'#666'}}>
                第一张沙发谁来坐？？？
                <img src={require('./images/empty.png')} alt=""/>
              </h1>}
              <Pagination 
                currentPage={this.state.currentPage}
                pageSize={this.state.pageSize}
                totalCount={this.state.totalCount}
                onChange={(currentPage, pageSize)=>{this.onPageChange(currentPage, pageSize)}}
              ></Pagination>
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