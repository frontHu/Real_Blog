const express = require("express")
const Router = express.Router()
const blogModel = require("./model/blogModel").blogModels

Router.get('/list', function(req, res) {
  return res.json({
    code: 200, 
    list: new blogModel().list
  })
})

module.exports = Router