import React, { Component } from "react";
import { connect } from "react-redux";
import "./scss/app.scss";
import Header from "./../Header/Header";


@connect(mapStateToProps)
class App extends Component {
  render() {
    return (
      <div className="app">
        {
          this.props.router.location.pathname === "/" ? null : <Header />  
        }
          {/* <ReactCSSTransitionGroup
            transitionName="transitionWrapper"
            component="div"
            className="transitionWrapper"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            > */}
            {/* <div key={this.props.location.pathname} style={{position:"absolute", width: "100%", height:"100%"}}> */}
              {
                this.props.children
              }
            {/* </div> */}
        {/* </ReactCSSTransitionGroup> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default App;