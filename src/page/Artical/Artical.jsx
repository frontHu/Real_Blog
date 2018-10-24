import React, { Component } from "react";
import "./scss/articalPage.scss";
import hljs from "highlight.js";
import marked from "marked";
import "./scss/rainbown.css";
import * as Apis from './../../service/blog.service'


class Artical extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      title: '',
      content: '',
      desc: ''
    }
  }

  componentDidMount() {
    this.getArticle().then(res => {
      let $content = document.querySelector(".articalPage-content-text");
    // $content.innerHTML = marked('<pre><code>var a = 11</code></pre>');
      let $preCode = document.querySelectorAll("pre code");
      hljs.initHighlightingOnLoad();
      $preCode.forEach((item) => {
        hljs.highlightBlock(item);
      });
    })
    
  }

  //获取文章
  getArticle() {
    let id = this.props.params.articalID
    return new Promise((resolve, reject) => {
      Apis.getBlogDetail(id).then(res => {
        this.setState({
          title: res.content.title,
          desc: res.content.desc,
          content: res.content.content
        })
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  render() {
    return (
      <div className="articalPage moveIn">
        <div className="articalPage-main">
          <div className="articalPage-content">
            <div className="articalPage-content-banner">
              <div className="articalPage-content-banner_title">
                <h1>{this.state.title}</h1>
                <h3>{this.state.desc}</h3>
              </div>
            </div> 
            <div className="articalPage-content-text" dangerouslySetInnerHTML={{__html: this.state.content}}>
            {/* <MarkdownComponent source={this.state.content} /> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Artical;