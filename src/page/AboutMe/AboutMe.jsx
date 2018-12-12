import React, { Component } from "react";
import "./scss/about.scss";

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutPage moveIn">
        <div className="aboutPage-banner-fixed"></div>
        <div className="aboutPage-main">
          <div className="aboutPage-main-header">
            <a href="/" className="aboutPage-main-header-back">回到首页</a>
            <div className="aboutPage-main-header_content grid-row">
              
              <div className="aboutPage-main-header_content_avatar">
                <img src={require("./../../assets/zy.png")} alt="" />
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
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;一个正在成长的90后小前端，爱好前端，喜欢coding，热爱新的事物，却又是懒惰和轻微强迫症综合体患者。<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;对未来充满着斗志，有时却被眼前的现实所打击回归自我。<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;年轻的我们迷茫而又着急.这么年轻却觊觎整个世界。<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;浮躁却又想看透生活，不断催促自己快点成长，却沉不下心认真读一篇文章 。<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;一次吹响前进的号角 却又总倒在离出发不远的地方。
                </p>
              </div>
              <div className="aboutPage-main-content-me_title">工作历程</div>
              <div className="aboutPage-main-content-me_desc">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;毕业至今已有3年。<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;2015-阴差阳错的接触到前端...<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;2016-鬼知道经历了什么...<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;2017-时光流影-遇到一些好同事...<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;2018-讯飞-搬砖搬砖搬砖...<br />
                  {/* &nbsp;&nbsp;&nbsp;&nbsp;持续的学习才是前端的魅力所在吧。<br /> */}
                  {/* &nbsp;&nbsp;&nbsp;&nbsp;也许是因为觉得前端是一个让人觉得年轻，有活力，有创新，能够让你不断前进，可以特立独行的一个"职业"吧。<br/> */}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </p>
              </div> 
              <div className="aboutPage-main-content-me_title">Dream Follow</div>
              <div className="aboutPage-main-content-me_desc">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;不断学习，不断探索。<br />
                  {/* &nbsp;&nbsp;&nbsp;&nbsp; <br /> */}
                  {/* &nbsp;&nbsp;&nbsp;&nbsp;Better Life.<br /> */}
                  {/* &nbsp;&nbsp;&nbsp;&nbsp;(文笔不好，回去多看看书.....) */}
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