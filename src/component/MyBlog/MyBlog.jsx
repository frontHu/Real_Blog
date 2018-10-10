import React, { Component } from "react";
import BlogItem from "./children/BlogItem";
import "./scss/myBlog.scss";
import * as Apis from './../../service/blog.service';
import Loading from './../../component/Loading/Loading';
import { bindActionCreators } from 'redux';
import * as blogActions from './../../redux/action/blog.action';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class MyBlog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      list: [],
      arr: [],
      show: false,
    }
    this.actions = bindActionCreators(Object({}, blogActions) , this.props.dispatch)
    this.currentPage = 1;
    this.requesting = false;
    this.heightArray = [];
    this.itemWidth = 300;
    this.stop = false
    this.scrollHandle = this.scrollHandle.bind(this);
    this.imglocation = this.imglocation.bind(this)
  }

  componentDidMount() {
    this.getBlogList();
    this.imglocation();
    window.addEventListener("scroll", this.scrollHandle, false);
    window.addEventListener("resize", this.imglocation, false)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandle, false);
    window.removeEventListener("resize", this.imglocation, false);
  }

  //获取博客列表
  getBlogList() {
    let params = {
      currentPage: this.state.currentPage
    }
    this.setState({ show: true })
    if(this.stop) return;
    Apis.getBlogList(params).then(res => {
      this.setState({
        currentPage: Number(res.content.currentPage),
        list: [...this.state.list, ...res.content.list],
        show: false
      }, () => {
        this.imglocation();
        if(res.content.totalCount === this.state.list.length) {
          this.stop = true;
        }
        this.requesting = false;
      });
    })
  }

  //计算容器宽度以及定位
  imglocation() {
    if(this.state.list.length <= 0) return
    let box = document.querySelector(".myBlog")
    let container = document.querySelector("#container");
    let aBox = container.children;
    let clientWidth = box.clientWidth;
    let itemWidth = document.querySelector('.blogItemPage') && 
      document.querySelector('.blogItemPage').clientWidth;
    let num = Math.floor(clientWidth / itemWidth);
    container.style.width = num * itemWidth + "px";
    container.style.margin = "0 auto";
    //计算高度数组以及定位每个元素位置，同时更新高度数组
    this.heightArray = [];
    for (let i = 0; i < aBox.length; i++) {
      if (i < num) {
        this.heightArray.push(aBox[i].offsetHeight);
        let list = this.state.list;
        aBox[i].style.position = "static";
        list[i].left = 0;
        list[i].top = 0;
        this.setState({list});
      } else {
        let minHeight = Math.min.apply(null, this.heightArray);
        aBox[i].style.position = "absolute";
        let minIndex = this.getMinIndex(this.heightArray, minHeight);
        this.heightArray[minIndex] = this.heightArray[minIndex] + aBox[i].offsetHeight;
        let list = this.state.list;
        
        list[i].left = minIndex * this.itemWidth;
        list[i].top = minHeight;
        this.setState({list});
      }
    }
    let maxH = Math.max.apply(null, this.heightArray);
    document.querySelector('.myBlog-main').style.height = maxH + 'px'
  }

  //获取最小下标
  getMinIndex(arr, min) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === min) {
        return i;
      }
    }
  }

  //判断是否滚动到底部加载数据
  isLoad() {
    let oContainer = document.querySelector('#container');
    let aBox = oContainer.children;
    let lastTop = this.getPageTop(aBox[aBox.length - 1]);
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if (aBox.length <= 0) { return false }
    if (lastTop < scrollTop + clientHeight) {
      return true;
    } else {
      return false;
    }
  }

  //获取元素距离页面顶部距离
  getPageTop(e) {
    let top = 0
    while (e && e.offsetParent) {
      top += e.offsetTop;
      e = e.offsetParent;
    }
    return top;
  }

  //滚动事件
  scrollHandle() {
    if (this.isLoad() && !this.requesting && !this.stop) {
      this.requesting = true;
      this.setState({
        currentPage: this.state.currentPage + 1
      }, () => {
        this.getBlogList();
      });
    }
  }

  render() {
    let list = this.state.list || [];
    return (
      <div className="myBlog grid-row" >
        <div className="myBlog-main" id="container" style={{ minHeight: 400 }}>
        
            {list.length > 0 && list.map((v, i) => {
              return (
                <BlogItem {...v} key={i} i={i} /> 
              )
              
            })}
         
        </div>
        { this.state.show ? <Loading/> : null }
      </div>
    )
  }
}

export default MyBlog;