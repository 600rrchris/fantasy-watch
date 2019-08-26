var Search = require('../models/search');
const rootURL = "http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/REG/1/injuries.json?api_key="
var request = require('request');

module.exports = {
    index,
    create
};

function index (req, res, next){
    res.render('search', {teams: null})
  };

  function create (req, res, next) {
    request(
        rootURL + process.env.NFL_TOKEN,
        function(err, response, body){
            res.render('search', {teams: body})
        }
    )
  }
