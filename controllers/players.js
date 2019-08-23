var Player = require('../models/player')
const rootURL = 'http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/REG/1/injuries.json'

module.exports = {
    index,
    create,
}

function index(req, res, next) {
    console.log(req.query)
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    Student.find(modelQuery)
    .sort(sortKey).exec(function(err, players) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('players/index', {
        players,
        user: req.user,
        name: req.query.name,
        sortKey
      });
    });
  }