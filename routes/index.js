var router = require('express').Router();
var passport = require('passport');var router = express.Router();
var request = require('request');
const rootURL = 'http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/REG/1/injuries.json'
var token = process.env.NFL_TOKEN;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: express, teams: null});
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/students',
    failureRedirect : '/students'
  }
));
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/students');
});
    
// router.post('/', function(req, res) { 
//   var options = {
//     url: rootURL,
//     headers: {
//     'User-Agent': '600rrchris',
//     'Authorization': 'token ' + process.env.NFL_TOKEN,
//     'X-Originating-IP': '63.65.120.22'

//   }
// };
//   request(options, function(err, response, body) {
//     var teams = JSON.stringify(body);
//     res.render('index', {teams: teams})
//   })})



module.exports = router;
