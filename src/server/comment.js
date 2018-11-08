const express = require("express");
const Router = express.Router();
const commentModel = require("./model/commentModel").model;


Router.post('/list', function(req, res) {
  let { currentPage, pageSize } = req.body
  commentModel.find(function(err, doc) {
    if(err) {
      return res.json({code: 000, msg: '后端出错'})
    }else {
      let data = {
        currentPage: currentPage,
        pageSize: pageSize,
        list: doc[0] ? doc[0].commentList.reverse().slice((currentPage-1)*5, currentPage*5) : [],
        totalCount: doc[0] ? doc[0].commentList.length : 0
      }
      return res.json({code: 200, content: data})
    }
  })
})

Router.post('/sub', function(req, res) {
  let { name, email, website, comment, replyForId } = req.body
  commentModel.find(function(err, doc) {
    let newData = {
      name, email, website, comment, replyForId, time: (new Date()).getTime()
    }
    if(!doc || doc.length <= 0) {
      let comment = new commentModel({
        currentPage: 1, 
        pageSize: 10, 
        totalCount: 1, 
        commentList: newData
      })
      comment.save(function(err, doc) {
        if (err) {
          return res.json({ code: 000, msg: '后端出错' });
        } else {
          return res.json({ code: 200, msg: '保存成功' });
        }
      })
    }else {
      let _id = doc[0]._id
      let newData = {
        name, email, website, comment, replyForId, time: (new Date()).getTime()
      }
      commentModel.update({_id: _id}, {'$push': {commentList: newData}}, function (err, doc) {
        if (err) {
          return res.json({code: 000,  msg: '后端出错' })
        } else {
          return res.json({code: 200,  msg: '保存成功1' })
        }
      })
    }
  })
}) 

module.exports = Router