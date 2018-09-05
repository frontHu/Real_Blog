import React, { Component } from "react"
import "./scss/blogPage.scss"
import MyBlog from './../MyBlog/MyBlog'

class BlogPage extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="blogPage">
        <div className="blogPage-banner">
          <div className="blogPage-banner-text">
            <section className="blogPage-banner_big">Hey There.</section>
            <section className="blogPage-banner_small">based in Hefei, Anhu.</section>
            <section className="blogPage-banner_big">Just Another FE Engineer.</section>
            <section className="blogPage-banner_small">Now, Working at Iflytek.</section>
            <section className="blogPage-banner_big">Want to be a FE architect.</section>
            <section className="blogPage-banner_small">Always troubled by reality. <span>😝😝😝</span></section>
          </div>
        </div>
        <div className="blogPage-content">
          <div className="blogPage-block">
            <MyBlog />
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPage;