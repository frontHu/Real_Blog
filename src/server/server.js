const express = require('express')
const app = new express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const server = require('http').Server(app)
const DB_URL = "mongodb://localhost:27017/test"
const blogRouter = require('./blog') 
const commentRouter = require('./comment')
const friendRouter = require('./friend') 

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/blog', blogRouter)
app.use('/comment', commentRouter)
app.use('/friend', friendRouter)

mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
  console.log('##### mongo connect successed #####') 
})
app.listen(8080, function(params) {
  console.log('server start')
}); 