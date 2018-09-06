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
  // let data = {
  //   currentPage,
  //   list: arr
  // }
  // new blog(data).save()
  blog.find(function(err, doc) {
    if(err) {
      return res.json({code: 000, msg: '后端出错'})
    }else {
      setTimeout(function() {
        return res.json({ code: 200, content: doc[0] })
      }, 1000)
    }
  })
})

Router.post('/save', function(req, res) {
  let params = req.body
  let newData = {
    imgUrl: '',
    title: params.title,
    desc: params.desc,
    content: params.content,
    createTime: params.time,
    seeNumber: 0
  };
  blog.find(function(err, doc) {
    let list = doc[0].list
    let _id = doc[0]._id
    list.push(newData)
    let data = {
      currentPage: doc[0].currentPage,
      list
    }
    doc.set({list: list})
    let blogModel = new blog(data); 
    blogModel.save(function(err, doc) {
      if(err) {
        return res.json({code: 000, msg: '后端出错'})
      }else {
        return res.json({code: 200, msg: '保存成功'})
      }
    })
  })
  // let blogModel = new blog(data);
  // blogModel.save(function(err, doc) {
  //   if(err) {
  //     return res.json({code: 000, msg: '后端出错'})
  //   }else {
  //     return res.json({code: 200, msg: '保存成功'})
  //   }
  // })
})

module.exports = Router