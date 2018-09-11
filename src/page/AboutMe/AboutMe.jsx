import React, { Component } from "react";
import "./scss/about.scss";

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutPage moveIn">
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
                <p>&nbsp;&nbsp;&nbsp;&nbsp;一个还在成长的90后小前端，爱好前端，喜欢coding，热爱新的事物，却又是懒惰和轻微强迫症综合体患者。
                偶尔对未来充满着斗志，有时却被眼前的现实所打击回归自我。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;年轻的我们迷茫而又着急，想要惬意的生活，又忙于在前进的路上奔跑，这么年轻却觊觎整个世界，那么浮躁却又想
                看透生活，不断催促自己快点成长，却沉不下心认真读一篇文章 ，一次次吹响前进的号角 却又总倒在离出发不远的地方。</p>
              </div>
              <div className="aboutPage-main-content-me_title">工作历程</div>
              <div className="aboutPage-main-content-me_desc">
                <p>
                &nbsp;&nbsp;&nbsp;&nbsp;毕业至今(2018)小有3年。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;网易安徽-申请前端账号。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;时光流影-前端打怪。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;科大讯飞-持续打怪ing。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;持续的学习才是前端的魅力所在吧。<br/>
                {/* &nbsp;&nbsp;&nbsp;&nbsp;也许是因为觉得前端是一个让人觉得年轻，有活力，有创新，能够让你不断前进，可以特立独行的一个"职业"吧。<br/> */}
                &nbsp;&nbsp;&nbsp;&nbsp;
                </p>
              </div>
              <div className="aboutPage-main-content-me_title">Dream Follow</div>
              <div className="aboutPage-main-content-me_desc">
                <p>
                &nbsp;&nbsp;&nbsp;&nbsp;每个人有自己的梦想，有自己想要的生活。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;创业，FreeLancer. <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Better Life.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;(以上完全虾扯蛋！！！)
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