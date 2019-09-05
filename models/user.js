var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var usersSchema = new Schema ({
    name: String,
    email: String,
    googleID: String,
  })


  module.exports = mongoose.model('User', usersSchema)