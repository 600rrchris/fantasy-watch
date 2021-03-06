var express = require('express');
var router = express.Router();
var playersCtrl = require('../../controllers/players')
var request = require('request');
const rootURL = 'http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/REG/1/injuries.json'
var token = process.env.NFL_TOKEN;
var passport = require('passport');
/* GET users listing. */

router.get('/', isLoggedIn, playersCtrl.index);
router.get('/new', isLoggedIn, playersCtrl.new);
router.post('/', isLoggedIn, playersCtrl.create);
router.get('/:id', isLoggedIn, playersCtrl.show);
router.delete('/delete/:id',  playersCtrl.del);
router.put('/:id', playersCtrl.edit)

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}



module.exports = router;
