import React from 'react'
import './scss/loading.scss'

class Loading extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { w, h, show } = this.props
    return (
      <div className="loading"
        style={{
          width: w ? w : '100%',
          height: h ? h : '100%'
        }}
        
      >
        <div className="loading-circle"></div>
      </div>
    )
  }
}

export default Loading