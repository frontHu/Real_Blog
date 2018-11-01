import React from "react";
import "./scss/pagination.scss";

class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 2,
      pageSize: 10,
      totalPage: 100,
      total: 0
    }
  }

  prePage() {0
    return this.state.currentPage === 1 
  }

  nextPage() {
    return this.state.currentPage * this.state.pageSize >= this.state.total
  }

  showPageBtn() {
    let totalPage = this.state.totalPage
    let currentPage = this.state.currentPage
    let arr = []

    if(totalPage <= 10) {
      for(let i = 1; i <= totalPage; i++) {
        arr.push(i)
      }
      return arr
    }
    
    if(currentPage <= 4) {
      return [1, 2, 3, 4, 5, 0, totalPage]
    }

    if(currentPage >= totalPage - 3) {
      return [1, 0, totalPage-4, totalPage-3, totalPage-2, totalPage-1, totalPage]
    }

    return [1, 0, currentPage-1, currentPage, currentPage+1, 0 ,totalPage]
  }
  
  goPage(v) {
    this.setState({
      currentPage: v
    })
  }

  render() {
    return (
      <div className="pagination">
        <ul className="pagination-prev">上一页</ul>
        <ul className="pagination-list">
        {
          this.showPageBtn().map((v, i) => {
            if(v === 0) {
              return <li className="pagination-list-item" key={i}>...</li>
            }else {
              return <li className={ `${this.state.currentPage === v ? 'active-item':''} pagination-list-item'`} onClick={this.goPage.bind(this, v)} key={i}>{v}</li>
            }
          })
        }
        </ul>
        <ul className="pagination-next">下一页</ul>
      </div>
    )
  }
}

export default Pagination