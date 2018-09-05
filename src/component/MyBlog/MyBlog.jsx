import React, { Component } from "react";
import BlogItem from "./children/BlogItem"
import "./scss/myBlog.scss";
import * as Apis from './../../service/blog.service'

class MyBlog extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      num: [1,2,3,4,5,6,6,7,8]
    }
    this.scrollHandle = this.scrollHandle.bind(this);
  }

  componentDidMount() {
    this.imglocation();
    window.addEventListener("scroll", this.scrollHandle, false);
    Apis.getBlogList()
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandle, false);
  }

  //imagelocation
  imglocation() {
    //计算容器宽度以及定位
    let container = document.querySelector("#container");
    let aBox = container.children;
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
    
    if (lastTop < scrollTop + clientHeight) {
      return true;
    } else {
      return false;
    }
  }

  //获取元素距离页面顶部距离
  getPageTop(e) {
    let t = e.offsetTop;
    while (e === e.offsetParent) {
      t += e.offsetTop;
    }
    return t;
  }

  //滚动事件
  scrollHandle() {
    if (this.isLoad()) {
      let arr = this.state.num
      arr.push(1,2,3)
      this.setState({
        num: arr
      }, () => {
        this.imglocation()
      })
    }
  }

  render() {
    return (
      <div className="myBlog">
        <div className="myBlog-main" id="container">
          {
            this.state.num.map((item, index) => {
             return  <BlogItem is={index%2 === 0} key={index}/>
            })
          }
        </div>
      </div>
    )
  }
}

export default MyBlog;