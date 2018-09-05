import React, { Component } from "react";
import "./scss/articalPage.scss";
import hljs from "highlight.js";
import marked from "marked";
import "./scss/rainbown.css";


class Artical extends Component {
  // constructor(props) {
  //   super(props) 
  // }

  componentDidMount() {
    let $content = document.querySelector(".articalPage-content-text");
    $content.innerHTML = marked('<pre><code>var a = 11</code></pre>');
    let $preCode = document.querySelectorAll("pre code");
    hljs.initHighlightingOnLoad();
    $preCode.forEach((item) => {
      hljs.highlightBlock(item);
    });
  }

  render() {
    return (
      <div className="articalPage">
        <div className="articalPage-main">
          <div className="articalPage-content">
            <div className="articalPage-content-banner">
              <div className="articalPage-content-banner_title">
                <h1>合肥GDV将由执行</h1>
                <h3>非常幸运于上周末参加了合肥GDG组织的一次活动，忙碌了一整周，终于有时间整理下这次行程的收获。</h3>
              </div>
            </div> 
            <div className="articalPage-content-text"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Artical;