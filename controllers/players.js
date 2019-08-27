var Search = require('../models/player');
const rootURL = "http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/REG/1/injuries.json?api_key="
var request = require('request');

module.exports = {
    new: newPlayer,
    index,
};

function index(req, res){
    res.render('players/index')
}

function newPlayer (req, res, next){
    res.render('players/new', {teams: null})
  };

