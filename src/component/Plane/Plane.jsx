import React from 'react';
import './scss/plane.scss';
import Planeitem from './children/Planeitem';

class Plane extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="plane">
        <div className="plane-banner"></div>
        <div className="plane-desc">
          <div className="plane-desc-box grid-row">
            <div className="plane-desc-github">
              <img src={require('./images/GitHub.png')} alt=""/>
              <img src={require('./images/github-avatar.png')} alt=""/>
            </div>
            <p className='plane-desc-box-desc'>GitHub上没有做啥贡献，但是记录了做前端的点点滴滴。继续努力！</p>
          </div>
        </div>
        <div className="plane-main">
          <div className="plane-main-cotent grid-row">
            <Planeitem 
              title='基于React的可拖动进度条初级组件'
              desc='基于react的进度条组件，可实现拖拽调整进度和支持调整后的事件回调。'
              link='https://www.npmjs.com/package/progressbar-react'
              img={require('./images/STAR.png')}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Plane