import React, { Component } from "react";
import BlogItem from "./children/BlogItem"
import "./scss/myBlog.scss";
import * as Apis from './../../service/blog.service'

class MyBlog extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1
    }
    this.scrollHandle = this.scrollHandle.bind(this);
  }

  componentDidMount() {
    this.props.actions.blogListAction({ currentPage: this.state.currentPage })
    this.imglocation();
    window.addEventListener("scroll", this.scrollHandle, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandle, false);
  }

  //imagelocation
  imglocation() {
    //计算容器宽度以及定位
    let container = document.querySelector("#container");
    let aBox = container.children;
    if(aBox.length <= 0) return
    let imgWidth = aBox[0].offsetWidth;
    let clientWidth = container.clientWidth;
    let num = Math.floor(clientWidth / imgWidth);
    container.style.width = num * imgWidth + "px";
    container.style.margin = "0 auto";
    //计算高度数组以及定位每个元素位置，同时更新高度数组
    let heightArray = [];
    for (let i = 0; i < aBox.length; i++) {
      if (i < num) {
        heightArray.push(aBox[i].offsetHeight)
      } else {
        let minHeight = Math.min.apply(null, heightArray);
        aBox[i].style.position = "absolute";
        aBox[i].style.top = minHeight + "px";
        let minIndex = this.getMinIndex(heightArray, minHeight);
        aBox[i].style.left = minIndex * aBox[0].offsetWidth + "px";
        heightArray[minIndex] = heightArray[minIndex] + aBox[i].offsetHeight;
      }
    }
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
    console.log(lastTop, scrollTop, clientHeight)
    if (lastTop < scrollTop + clientHeight) {
      return true;
    } else {
      return false; 
    }
  }

  //获取元素距离页面顶部距离
  getPageTop(e) {
    let top = 0
    while (e.offsetParent) {
      top += e.offsetTop;
      e = e.offsetParent
    }
    return top;
  }

  //滚动事件
  scrollHandle() {
    if (this.isLoad()) {
      this.setState({
        currentPage: this.state.currentPage + 1
      }, () => {
        this.props.actions.blogListAction({currentPage:this.state.currentPage})
      })
    }
    this.imglocation()
  }

  render() {
    return (
      <div className="myBlog" >
        <div className="myBlog-main" id="container">
          {
            this.props.list.length>0 &&  this.props.list.map((v, i) => {
             return  <BlogItem {...v} key={i} i={i}/>
            })
          }
        </div>
      </div>
    )
  }
}

export default MyBlog;