import React, { Component } from "react";
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode}  from 'react-dom';

class Modal extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const doc = window.document
    this.node = doc.createElement('div')
    doc.body.appendChild(this.node)
    this.renderPortal(this.props)
  }

  componentDidUpdate() {
    this.renderPortal(this.props)
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.node)
    window.document.body.removeChild(this.node)
  }

  renderPortal(props) {
    unstable_renderSubtreeIntoContainer(
      this,  //当前组件
      <div>塞进传送门的jsx</div>,
      this.node //传送门另一端的DOM node
    ) 
  }

  render() {
    return <div>dangq </div>
  }
}

export default Modal;