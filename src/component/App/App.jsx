import React, { Component } from "react";
import { connect } from "react-redux";

@connect(mapStateToProps)
class App extends Component {
  componentDidMount() {
    console.log(this.props, 'props')
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default App;