import React, { Component } from 'react';
import './../scss/avatar.scss';

class Avatar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="h5-avatar">
      {
        this.props.direction === 'left'
        ? 
        <div className="avatar-left">
          <div className="h5-avatar-img">
            <img src="" alt=""/>
          </div>
          <div className="h5-avatar-content">
            <span className="h5-avatar-name">码云</span>
            <p className="dialog">11111</p>
          </div>
        </div>
        :
        <div className="avatar-right">
          <div className="h5-avatar-img">
            <img src="" alt=""/>
          </div>
          <div className="h5-avatar-content">
            <span className="h5-avatar-name">码云</span>
            <p className="dialog">11111</p>
          </div>
        </div>
      }
      </div>
    )
  }
}

export default Avatar;