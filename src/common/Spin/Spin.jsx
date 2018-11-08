import React from 'react'
import './scss/spin.scss'

class Spin extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.visible ? (
      <div className="spin">
        <div className="spin-loading">
          <img src={require('./images/roll.gif')} alt=""/>
          <p>努力加载中</p>
        </div>
      </div>
    ) : null
  }
}

export default Spin