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
                <p>&nbsp;&nbsp;&nbsp;&nbsp;一个还未成长起来的90后小前端，爱好前端，喜欢coding，热爱新的事物，却又是懒惰和轻微强迫症综合体患者。
                偶尔对未来充满着斗志，有时却被眼前的现实所打击回归自我。考过研，考过公务员，想过回家，想过创业，但没过放弃代码。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;年轻的我们迷茫而又着急，想要房子，车子。你想要旅行，想要高品质生活，这么年轻却觊觎整个世界，你那么浮躁却又想
                看透生活，你不断催促自己快点成长，却沉不下心认真读一篇文章 ，一次次吹响前进的号角 却又总倒在离出发不远的地方。</p>
              </div>
              <div className="aboutPage-main-content-me_title">工作历程</div>
              <div className="aboutPage-main-content-me_desc">
                <p>
                &nbsp;&nbsp;&nbsp;&nbsp;毕业至今(2018)小有3年，写过页面，做过测试，迷茫过，最后还是走到前端之路。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;可能真的是因为兴趣吧，前端发展之快，技术更新迭代，不断的学习去填充自己，从中可以获得一些小小的成就感。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;有时候可能是因为内心里觉得前端是一个让人觉得年轻，有活力，有创新，能够让你不断前进，可以特立独行的一个"职业"吧。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                </p>
              </div>
              <div className="aboutPage-main-content-me_title">Dream Follow</div>
              <div className="aboutPage-main-content-me_desc">
                <p>
                &nbsp;&nbsp;&nbsp;&nbsp;每个人有自己的梦想，有自己想要的生活。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;想创业，想奋斗，想做一个FreeLancer. <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;有能力给自己的家人一个更好的生活。
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