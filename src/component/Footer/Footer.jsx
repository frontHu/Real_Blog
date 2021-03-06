import React from 'react'
import './scss/footer.scss'
import { Icon } from 'antd'
import { withRouter } from 'react-router-dom'
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
     
      <div className='footer'>
        <div className="grid-row">
          <div style={{overflow: 'hidden', paddingBottom: 10}}>
            <div className="footer-left">
              <h3>我的世界</h3>
              <p>这个网站是自己前端路上的一个缩影，将这个网站作为一个自己“终生维护”的项目。不断的去精雕细琢，不断的去完善。也可以当做一个技术的实验基地，将好玩的东西应用在上面。</p>
            </div>
            <div className="footer-mid">
              <h3>相关</h3>
              <ul>
                <li><a href="/blog"><Icon type="edit" /> 博客</a></li>
                <li><a href="/plane"><Icon type="like-o" /> 造飞船</a></li>
                <li><a href="/about"><Icon type="heart-o" /> 关于我</a></li>
                <li><a href="/hero"><Icon type="link" /> 友链</a></li>
                <li><a href="/comment"><Icon type="message" /> 留言</a></li>
              </ul>
            </div>
            <div className="footer-right">
              <h3>关于</h3>
              <ul>
                <li><a href="https://github.com/frontHu" target="_blank"><Icon type='github' /></a></li>
              </ul>
            </div>
          </div>
          <div className="design">
            <p> design & code by @胡至炜,base on experss + mongoDB + react</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer