import React, { Component } from "react";
import { connect } from "react-redux";
import "./scss/app.scss";
import Header from "./../Header/Header";

@connect(mapStateToProps)
class App extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    console.log(this.props.router.location.pathname)
    return (
      <div className="app">
        {
          this.props.router.location.pathname === "/" ? null :
          <Header />  
        }
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default App;