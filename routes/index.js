var router = require('express').Router();
var passport = require('passport');
var request = require('request');
const rootURL = 'http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/REG/1/injuries.json'
var token = process.env.NFL_TOKEN;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {teams: null, user: req.user});
});
//Google Auth
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
  ));
  // for success or fail
  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/',
      failureRedirect : '/'
    }
    ));
    //logout and return to login
    router.get('/logout', function(req, res){
      req.logout();
      res.redirect('/');
    });
    //click position to get to search page
    router.get('/index/:id', function(req, res){
      res.render('search', {title: 'search'})
    })

  
            
            
            
            module.exports = router;
