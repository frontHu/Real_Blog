import React, { Component } from "react";
import { connect } from "react-redux";
import "./scss/app.scss";
import Header from "./../Header/Header";
import Footer from './../Footer/Footer'


@connect(mapStateToProps)
class App extends Component {
  render() {
    return (
      <div className="app">
        {
          this.props.router.location.pathname === "/" ? null : <Header />  
        }
        {this.props.children}
        {
          this.props.router.location.pathname === "/about" ? null : <Footer />
        }
        
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default App;