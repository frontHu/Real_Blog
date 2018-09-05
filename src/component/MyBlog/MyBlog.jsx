import React, { Component } from "react";
import BlogItem from "./children/BlogItem"
import "./scss/myBlog.scss";
import * as Apis from './../../service/blog.service'

class MyBlog extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      // currentPage: 1
    }
    this.currentPage = 1;
    this.requesting = false;
    this.heightArray = [];
    this.itemWidth = 300;
    this.scrollHandle = this.scrollHandle.bind(this);
  }

  componentDidMount() {
    this.getBlogList();
    this.imglocation();
    window.addEventListener("scroll", this.scrollHandle, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandle, false);
  }

  //获取博客列表
  getBlogList() {
    this.props.actions.blogListAction({currentPage: this.currentPage},()=> {
      this.requesting = false;
      let maxH = Math.max.apply(null, this.heightArray);
      document.querySelector('.myBlog-main').style.height =  maxH + 500+'px'
    })
  }

  //imagelocation
  imglocation() {
    //计算容器宽度以及定位
    let container = document.querySelector("#container");
    let aBox = container.children;
    // if(aBox.length <= 0) return
    // let imgWidth = aBox[0].offsetWidth;
    let imgWidth = 300;
    let clientWidth = container.clientWidth;
    let num = Math.floor(clientWidth / this.itemWidth);
    container.style.width = num * this.itemWidth + "px";
    container.style.margin = "0 auto";
    //计算高度数组以及定位每个元素位置，同时更新高度数组
    this.heightArray = [];
    for (let i = 0; i < aBox.length; i++) {
      if (i < num) {
        this.heightArray.push(aBox[i].offsetHeight)
      } else {
        let minHeight = Math.min.apply(null, this.heightArray);
        aBox[i].style.position = "absolute";
        aBox[i].style.top = minHeight + "px";
        let minIndex = this.getMinIndex(this.heightArray, minHeight);
        // aBox[i].style.left = minIndex * aBox[0].offsetWidth + "px";
        aBox[i].style.left = minIndex * this.itemWidth + "px";
        // console.log(heightArray, minIndex * this.itemWidth, 'minIndex')
        this.heightArray[minIndex] = this.heightArray[minIndex] + aBox[i].offsetHeight;
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
    if(aBox.length <= 0) {return false}
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
      e = e.offsetParent
    }
    return top;
  }

  //滚动事件
  scrollHandle() {
    console.log(this.isLoad(), 'this.isLoad()')
    if (this.isLoad()) {
      this.currentPage = this.currentPage + 1;
      if(!this.requesting) {
        this.requesting = true;
        this.getBlogList();
      }
    }
    this.imglocation();
  }

  render() {
    return (
      <div className="myBlog" >
        <div className="myBlog-main" id="container" style={{minHeight: 600}}>
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