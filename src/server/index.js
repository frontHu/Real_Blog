const express = require('express')
const app = new express()

app.use(function(req, res) {
  res.send('hello world')
})
app.listen(9089)