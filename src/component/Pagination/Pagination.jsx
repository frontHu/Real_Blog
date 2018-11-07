import React from "react";
import "./scss/pagination.scss";

class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: props.currentPage || 1,
      pageSize: props.pageSize || 10,
      totalCount: props.totalCount
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentPage: nextProps.currentPage,
      pageSize: nextProps.pageSize,
      totalCount: nextProps.totalCount
    })
  }

  prePage() {
    return this.state.currentPage === 1 
  }

  nextPage() {
    return this.state.currentPage * this.state.pageSize >= this.state.totalCount
  }

  showPageBtn() {
    let totalPage = Math.ceil(this.state.totalCount / this.state.pageSize)
    let currentPage = this.state.currentPage
    let arr = []
    if(totalPage === 0) {
      return []
    }
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
    }, () => {
      this.onPageChange(this.state.currentPage, this.state.pageSize)
    })
  }

  goPrevPage() {
    if(this.prePage()) return 
    this.setState({
      currentPage: this.state.currentPage - 1
    }, () => {
      this.onPageChange(this.state.currentPage, this.state.pageSize)
    })
    
  }

  goNextPage() {
    if(this.nextPage()) return 
    this.setState({
      currentPage: this.state.currentPage + 1
    }, () => {
      this.onPageChange(this.state.currentPage, this.state.pageSize)
    })
  }

  onPageChange(currentPage, pageSize) {
    this.props.onChange && this.props.onChange(currentPage, pageSize)
  }

  render() {
    return (
      this.showPageBtn().length > 0 ? 
        <div className="pagination">
          <ul className="pagination-prev" onClick={this.goPrevPage.bind(this)}>上一页</ul>
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
          <ul className="pagination-next" onClick={this.goNextPage.bind(this)}>下一页</ul>
      </div> : null
    )
  }
}

export default Pagination