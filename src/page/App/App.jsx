import React, { Component } from "react";
import "./scss/app.scss";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from "./../../component/Header/Header";
import Footer from './../../component/Footer/Footer'
import IndexPage from './../IndexPage/IndexPage'
import BlogPage from './../BlogPage/BlogPage'
import Artical from './../Artical/Artical'
import Hero from './../Hero/Hero'
import AboutMe from './../AboutMe/AboutMe'
import Comment from './../Comment/Comment'
import Plane from './../Plane/Plane'

class App extends Component { 
  render() {
    let pathname = window.location.pathname
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={ IndexPage }></Route>
            <Route path="/blog"  component={ BlogPage }></Route>
            <Route path="/artical/:articalID/:imgId" component={ Artical }></Route>
            <Route path="/hero"  component={ Hero }></Route>
            <Route path="/plane" component={ Plane }></Route>
            <Route path="/comment"  component={ Comment }></Route>
            <Route path="/about"  component={ AboutMe }></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;