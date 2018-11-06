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
    role: {
      type: String,
      reuqire: true
    },
    comment: {
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

