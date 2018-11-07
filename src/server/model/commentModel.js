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
  commentList: [new mongoose.Schema({
    name: {
      type: String,
      reuqire: true
    },
    email: {
      type: String,
      require: true
    },
    website: {
      type: String,
      require: true
    },
    comment: {
      type: String,
      require: true,
    }
  })]
}

module.exports = {
  model: mongoose.model('comment', new mongoose.Schema(model))
}

