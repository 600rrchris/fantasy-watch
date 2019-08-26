var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var factSchema = new Schema({
  text: String
}, {
  timestamps: true
});

var playerSchema = new Schema({
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    facts: [factSchema],
    googleId: String
  }, {
    timestamps: true
  });

  var positionSchema = new Schema({
      qb: String,
      rb: String,
      wr: String,
      wr2: String,
      flex: String,
      d: String,
      k: String,
  })

  module.exports = mongoose.model('Player', playerSchema);
  module.exports = mongoose.model('Position', positionSchema);