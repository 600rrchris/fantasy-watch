var Player = require('../models/player');
const rootURL = "http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/REG/1/injuries.json?api_key="
var request = require('request');

module.exports = {
    new: newPlayer,
    index,
    create,
};

function index(req, res){
    Player.find({}, function(err, players){
    res.render('players/index', {players})
    });
}

function newPlayer (req, res, next){
    res.render('players/new', {teams: null})
  };

 
function create(req, res, next){
    var player = new Player(req.body);
    player.save(function(err, doc) {
    if(err){ console.log("test"); return res.render('players/new');}
    res.redirect('players/new');
    })};