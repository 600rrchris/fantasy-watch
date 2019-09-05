var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var infoSchema = new Schema ({
  content: String
})

var playerSchema = new Schema({
    name: String,
    position: String,
    team: String,
    active: Boolean,
    info: [infoSchema]
  })
 


 module.exports = mongoose.model('Player', playerSchema);

