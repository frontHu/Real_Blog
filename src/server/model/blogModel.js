const mongoose = require("mongoose")

let model = {
  content: {
    currentPage: {
      type: String,
      require: true
    },
    list: [new mongoose.Schema({
      imgUrl: {
        type: String
      },
      title: {
        type: String,
        require: true
      },
      desc: {
        type: String,
        require: true
      },
      content: {
        type: String,
        require: true
      },
      createTime: {
        type: String,
        require: true
      },
      seeNumber: {
        type: String,
        require: true
      }
    })]
  }
}

module.exports = {
  model: mongoose.model('blog', new mongoose.Schema(model))
}