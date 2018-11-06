const express = require("express");
const Router = express.Router();
const comment = require("./model/commentModel").model;

Router.post('/sub', function(req, res) {
  console.log(11)
})

module.exports = Router