const mongoose = require("mongoose")

let model = {
  currentPage: {
    type: Number,
    require: true
  },
  totalCount: {
    type: Number,
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

module.exports = {
  model: mongoose.model('blog', new mongoose.Schema(model))
}