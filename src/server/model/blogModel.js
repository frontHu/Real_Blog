const mongoose = require("mongoose")

let models = {
  list: [new mongoose.Schema({
    title: {
      type: String,
      require: true
    },
    desc: {
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

let blogModels = mongoose.model('blog', new mongoose.Schema(models));

module.exports = {
  blogModels
}