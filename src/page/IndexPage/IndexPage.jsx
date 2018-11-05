import React, { Component } from "react";
import "./scss/indexPage.scss";
import { Link } from "react-router-dom";
import Modal from './../../component/Modal/Modal'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      english: '',
      allText: [{
        e: 'I guess it comes down to a simple choice:get busy living or get busy dying.',
        c: '生命可以归结为一种简单的选择：要么忙于生存，要么赶着去死'
      }, {
        e: 'You know some birds are not meant to be caged, their feathers are just too bright. ',
        c: '你知道，有些鸟儿是注定不会被关在牢笼里的，它们的每一片羽毛都闪耀着自由的光辉。'
      }, {
        e: "You got a dream, you gotta protect it. People can't do something themselves,they wanna tell you you can't do it.If you want something, go get it. ",
        c: ' 如果你有梦想的话，就要去捍卫它。那些一事无成的人想告诉你你也成不了大器。如果你有理想的话，就要去努力实现。'
      }, {
        e: 'Martin Frohm: What would you say if a man walked in here with no shirt, and I hired him? What would you say? <br /> Chris Gardner: He must have had on some really nice pants.',
        c: '马丁：如果有个人连衬衫都没穿就跑来参加面试而我却录用了他，你会怎么想？ <br /> 克里斯·加德纳：那他穿的裤子一定十分考究。'
      }]
    }
  }

  componentDidMount() {
    let i = Math.floor(Math.random() * 4) 
    this.setState({
      text: this.state.allText[i].c,
      english: this.state.allText[i].e
    })
  }

  render() {
    return (
      <div className="indexPage moveIn">
        <div className="indexPage_cover"></div>
        <div className="indexPage_title">
          <p className="indexPage_title_cn" dangerouslySetInnerHTML={{__html: this.state.text}}></p>
          <p className="indexPage_title_en" dangerouslySetInnerHTML={{__html: this.state.english}}></p>
          <div className="indexPage_jump">
            <Link to="/about">关于此站</Link>
            <Link to="/blog">进入博客</Link> 
          </div>
        </div>
        <Modal></Modal>
      </div>
    )
  }
}

export default IndexPage;