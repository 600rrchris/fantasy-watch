var express = require('express');
var router = express.Router();
var playersCtrl = require('../../controllers/api')
var request = require('request');
const rootURL = 'http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/REG/1/injuries.json'
var token = process.env.NFL_TOKEN;
var passport = require('passport');

router.get('/:id', isLoggedIn, playersCtrl.pullData);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;