const express = require("express");
const Router = express.Router();
const commentModel = require("./model/commentModel").model;


Router.post('/list', function(req, res) {
  let { currentPage } = req.body
  commentModel.find(function(err, doc) {
    return res.json({code: doc})
  })
 
})

Router.post('/sub', function(req, res) {
  let { name, email, website, comment } = req.body
  console.log( name, email, website, comment )
})

module.exports = Router