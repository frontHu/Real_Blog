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
                偶尔对未来充满着斗志，有时却被眼前的现实所打击回归自我。考过研，考过公务员，想过回家，想过创业，没想过放弃代码。
                年轻的我们很多东西无法挽留，去追逐心中梦想，心中的喜爱，前进的路上未知因素很多，但源于热爱，探索不止！</p>
              </div>
              <div className="aboutPage-main-content-me_title">工作历程</div>
              <div className="aboutPage-main-content-me_desc">
                <p>
                  毕业至今(2018)小有3年，毕业时接触前端，不会html，不会css，直到慢慢写了点jq时还不知道js和jq的区别时转行做了测试.
                  做完测试发现自己还是喜欢前端，又重新开始自学前端，随后入职"时光流影"。进如一个年轻，大牛，有极客精神的前端团队，学了很多受益匪浅的东西。
                  随后,入职科大讯飞...
                </p>
              </div>
              <div className="aboutPage-main-content-me_title">Dream Follow</div>
              <div className="aboutPage-main-content-me_desc">
                <p>
                  每个人有自己的梦想，有自己想要的生活。<br/>
                  有时我想有家自己的小咖啡店，安安静静，可以给追梦者一个心灵的庇护所。自己可以兼职一个FreeLancer.
                  偶尔可以带着父母，老婆，孩子出去旅游，去感知这个世界。
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