var Player = require('../models/player');
const rootURL = 'http://api.sportradar.us/nfl/official/trial/v5/en/players/41c44740-d0f6-44ab-8347-3b5d515e5ecf/profile.json?api_key=h8wtgnhr7bpnstyd2cg6hjvj'
var request = require('request');
var status = require('../controllers/api')
const secondURL = 'http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/REG/1/injuries.json?api_key=h8wtgnhr7bpnstyd2cg6hjvj'
const axios = require('axios');

module.exports = {
  new: newPlayer,
  index,
  create,
  show,
  del,
  edit
};

function edit(req, res) {
Player.findByIdAndUpdate(req.params.id, req.body, function(){
  res.redirect('/players')
} )
}

function del(req, res){
  console.log('delete')
  Player.findByIdAndDelete(req.params.id, function(){
    // player.save(function(){
      res.redirect('/players')

    // })
   })
  }

function index(req, res){
    Player.find({}, function(err, players){
    res.render('players/index', {players, user:req.user})
    });
}

function newPlayer (req, res, user){
    res.render('players/new', {teams: null, user:req.user})
  };

 
function create(req, res, next){
    var player = new Player(req.body);
    player.save(function(err, doc) {
    if(err){ console.log("test"); return res.render('players/new');}
    res.redirect('players');
    })};

    function show(req, res) {
        Player.findById(req.params.id, function(err, player) {
          axios.get(secondURL)
          .then(function (response) {
            // handle success
            let teams  = response.data.teams.name
            let birthdate = response.data.birth_date
            let position = response.data.position
            // return response.data
                      res.render('players/show', {response, teams, player, user:req.user});

          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
        })}
