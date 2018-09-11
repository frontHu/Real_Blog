import React, { Component } from "react";
import "./scss/app.scss";
import Header from "./../../component/Header/Header";
import Footer from './../../component/Footer/Footer'

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
export default App;