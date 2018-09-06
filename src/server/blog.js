const express = require("express")
const Router = express.Router()
const Mock = require('mockjs')
const blog = require("./model/blogModel").model
let arr = []
  for(let i=0; i<10; i++) {
    arr.push(Mock.mock({
      'imgUrl': '',
      'title|1-10': '小猪',
      'desc|1-50': '小猪佩奇',
      'createTime|1-100000': 10000,
      'seeNumber|1-100': 10
    }))
    
  }
Router.post('/list', function(req, res) {
  let { currentPage } = req.body
  if(!currentPage) {
    return res.json({code: 000, msg: '参数缺失'})
  }
  
  let blogModel = new blog({
    content: {
      currentPage: currentPage,
      list: arr
    }
  })
  blogModel.save(function(e, doc) {
    if(e) {
      return res.json({code: 000, msg: '后端出错'})
    }else {
      setTimeout(function() {
        return res.json({ code: 200, content: blogModel.content })
      }, 1000)
      
    }
  })
})

module.exports = Router