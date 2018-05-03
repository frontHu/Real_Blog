import React, { Component } from "react";
import "./scss/about.scss";

class AboutMe extends Component {
  // constructor(props) {
  //   super(props)
  // }
 
  render() {
    return (
      <div className="aboutPage">
        <div className="aboutPage-banner-fixed"></div>
        <div className="aboutPage-main">
          <div className="aboutPage-main-header">
            <div className="aboutPage-main-header_content">
              <div className="aboutPage-main-header_content_avatar">
                <img src={require("./images/zy.png")} alt=""/>
              </div>
              <p className="aboutPage-main-header_content_desc">韶华易逝，红颜易老。</p>
              <p className="aboutPage-main-header_content_desc">Want to open a coffee shop.</p>
              <p className="aboutPage-main-header_content_desc">To be a Freelancer.</p>
              <p className="aboutPage-main-header_content_desc">Travel with my Family.</p>
            </div>
          </div>
          <div className="aboutPage-main-content">
            <div className="aboutPage-main-content-me">
              <div className="aboutPage-main-content-me_title">前言</div>
              <div className="aboutPage-main-content-me_desc">
                <p>一个还未成长起来的90后小前端，爱好前端，喜欢coding，热爱新的事物，却又是懒惰和轻微强迫症综合体患者。
                偶尔对未来充满着斗志，有时却被眼前的现实所打击回归自我。考过研，考过公务员，想过回家，想过创业，但为过放弃代码。
                年轻的我们迷茫而又着急，想要房子，车子。你想要旅行，想要高品质生活，这么年轻却觊觎整个世界，你那么浮躁却又想
                看透生活，你不断催促自己快点成长，却沉不下心认真读一篇文章 ，一次次吹响前进的号角 却又总倒在离出发不远的地方。</p>
              </div>
              <div className="aboutPage-main-content-me_title">工作历程</div>
              <div className="aboutPage-main-content-me_desc">
                <p>
                  毕业至今(2018)小有3年，毕业时接触前端，不会html，不会css，直到慢慢写了点jq时还不知道js和jq的区别时转行做了测试.
                  做完测试发现自己还是喜欢前端，又重新开始自学前端，随后入职"时光流影"。进入一个年轻，大牛，有极客精神的前端团队，学了很多受益匪浅的东西。
                  随后,入职科大讯飞...
                </p>
              </div>
              <div className="aboutPage-main-content-me_title">Dream Follow</div>
              <div className="aboutPage-main-content-me_desc">
                <p>
                  每个人有自己的梦想，有自己想要的生活。<br/>
                  想创业，想奋斗，想做一个FreeLancer.
                  可以带着父母，老婆，孩子出去旅游，去感知这个世界。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;