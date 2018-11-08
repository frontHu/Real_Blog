import React, { Component } from "react";
import "./scss/app.scss";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AsyncComponent from './../../untils/AsyncComponent'
// import IndexPage from './../IndexPage/IndexPage'
// import BlogPage from './../BlogPage/BlogPage'
// import Artical from './../Artical/Artical'
// import Hero from './../Hero/Hero'
// import AboutMe from './../AboutMe/AboutMe'
// import Comment from './../Comment/Comment'
// import Plane from './../Plane/Plane'

const IndexPage = AsyncComponent(() => import('./../IndexPage/IndexPage'))
const BlogPage = AsyncComponent(() => import('./../BlogPage/BlogPage'))
const Artical = AsyncComponent(() => import('./../Artical/Artical'))
const Hero = AsyncComponent(() => import('./../Hero/Hero'))
const AboutMe = AsyncComponent(() => import('./../AboutMe/AboutMe'))
const Comment = AsyncComponent(() => import('./../Comment/Comment'))
const Plane = AsyncComponent(() => import('./../Plane/Plane'))

class App extends Component { 
  render() {
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