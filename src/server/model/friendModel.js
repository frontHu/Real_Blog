const mongoose = require("mongoose");

let model = {
  currentPage: {
    type: Number,
    require: true
  },
  pageSize: {
    type: Number,
    require: true
  },
  totalCount: {
    type: Number,
    require: true
  },
  list: [new mongoose.Schema({
    name: {
      type: String,
      reuqire: true
    },
    desc: {
      type: String,
      require: true
    },
    blog: {
      type: String,
      require: true
    },
    github: {
      type: String,
      require: true,
    },
    icon: {
      type: String
    }
  })]
}

module.exports = {
  model: mongoose.model('comment', new mongoose.Schema(model))
}

