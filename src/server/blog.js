const express = require("express");
const Router = express.Router();
const blog = require("./model/blogModel").model;

Router.post('/list', function (req, res) {
  let { currentPage } = req.body
  if (!currentPage) {
    return res.json({ code: 000, msg: '参数缺失' })
  }
  blog.find(function (err, doc) {
    if (err) {
      return res.json({ code: 000, msg: '后端出错' })
    } else {
      let data = {
        currentPage: currentPage,
        list: doc[0] ? doc[0].list.slice((currentPage-1)*10, currentPage*10) : [],
        totalCount: doc[0] ? doc[0].list.length : 0
      }
      return res.json({code: 200, content: data})
    }
  })
})

Router.post('/save', function (req, res) {
  let params = req.body
  let newData = {
    imgUrl: '',
    title: params.title,
    desc: params.desc,
    content: params.content,
    createTime: params.time,
    seeNumber: 0
  };
  blog.find(function (err, doc) {
    if (!doc || doc.length <= 0) {
      let blogModel = new blog({currentPage: 1, list: newData});
      blogModel.save(function (err, doc) {
        if (err) {
          return res.json({ code: 000, msg: '后端出错1' });
        } else {
          return res.json({ code: 200, msg: '保存成功' });
        }
      })
    } else {
      let _id = doc[0]._id
      blog.update({_id: _id}, {'$push': {list: newData}}, function (err, doc) {
        if (err) {
          return res.json({code: 000,  msg: '后端出错2' })
        } else {
          return res.json({code: 200,  msg: '保存成功' })
        }
      })
    }
  })
})

Router.get('/detail', function(req, res) {
  let blogId = req.query.id
  blog.find(function(err, doc) {
    if(err) {
      return res.json({code: 000,  msg: '后端出错' })
    }else {
      let list = doc[0].list
      let v = {}
      for(let i=0; i<list.length; i++) {
        console.log(list[i]._id == blogId)
        if(list[i]._id == blogId) {
          v = list[i]
          break;
        }
      }
      return res.json({code: 200,  content: v })
    }
  })
})

module.exports = Router