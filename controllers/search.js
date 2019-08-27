var Search = require('../models/search');
const rootURL = "http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/REG/1/injuries.json?api_key="
var request = require('request');

module.exports = {
    show,
    create
};

function show (req, res, next){
    res.render('search', {teams: null})
  };

