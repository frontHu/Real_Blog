import React, { Component } from "react"
import "./scss/blogPage.scss"
import MyBlog from './../../component/MyBlog/MyBlog'
import Loading from './../../component/Loading/Loading'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as blogActions from './../../redux/action/blog.action'

@connect(state => {
  return {
    blogReducer: state.blogReducer
  }
})
class BlogPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1
    }
    this.actions = bindActionCreators(Object.assign({}, blogActions), this.props.dispatch)
  }
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="blogPage">
        <div className="blogPage-main">
          <div className="blogPage-main-content">
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
                <MyBlog 
                  actions={this.actions}
                  list={this.props.blogReducer.list}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPage;