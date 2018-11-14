const express = require("express");
const Router = express.Router();
const friendModel = require("./model/friendModel").model;
const fs = require("fs");//操作文件
const multer = require('multer');//接收图片
const upload = multer({
  dest: './uploads'
});//定义图片上传的临时目录

//定义图片上传的临时目录 
 

Router.post('/add', upload.single('file'), function (req, res) { 
  console.log(req.file, 'file') 
  
})

module.exports = Router