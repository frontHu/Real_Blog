import React, { Component } from "react";
import { connect } from "react-redux";
import "./scss/app.scss";

@connect(mapStateToProps)

class App extends Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default App;