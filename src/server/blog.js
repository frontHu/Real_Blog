const express = require("express");
const Router = express.Router();
const blog = require("./model/blogModel").model;

Router.post('/list', function (req, res) {
  console.log(req, 'req')
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
          return res.json({ code: 000, msg: '后端出错' });
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
        if(list[i]._id == blogId) {
          v = list[i]
          break;
        }
      }
      return res.json({code: 200,  content: v })
    }
  })
})

Router.post('/all', function(req, res) {
  let params = req.body
  blog.find((function(err, doc) {
    let list = doc && doc[0]
    let obj = {}
    if(list.list.length > 0) {
      obj.currentPage = params.currentPage
      obj.pageSize = params.pageSize
      obj.content = list.list.slice((obj.currentPage-1)*obj.pageSize, (obj.currentPage-1)*obj.pageSize+obj.pageSize)
      res.send({
        code: '000', 
        list: {
          // content: obj.content, 
          content: list.list,
          currentPage: obj.currentPage, 
          pageSize: obj.pageSize
        }
      })
    }else {
      res.send({code: 200, list: {content: [], currentPage: 1, pageSize: 10}})
    }
  }))
})

Router.post('/delete', function(req, res) {
  let id = req.body._id
  blog.find(function(err, doc) {
    let list = doc && doc[0].list
    list.forEach((v, i) => {
      if(v._id == id) {
        list.splice(i,1)
      }
    })
    let _id = doc[0]._id
    blog.update({_id: _id}, {list}, function (err, doc) {
      if (err) {
        return res.json({code: 000,  msg: '删除失败' })
      } else {
        return res.json({code: 200,  msg: '删除成功' })
      }
    })
  })
})

module.exports = Router 