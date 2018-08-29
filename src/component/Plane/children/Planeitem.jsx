import React from 'react';
import './../scss/planeitem.scss';

class Planeitem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="plane-item grid-box">
        <a className='plane-item-box' href={this.props.link} target='_blank'>
          <div className="plane-item-box-data">
            <img src={this.props.img} alt=""/>
            <span>99</span>
          </div>
          <div className="plane-item-box-cover"></div>
          <div className="plane-item-box-desc">
            <div className="plane-item-box-desc-title">
              {this.props.title}
            </div>
            <div className="plane-item-box-desc-main">
              {this.props.desc}
            </div>
          </div>
        </a>
      </div>
    )
  }
}

export default Planeitem;