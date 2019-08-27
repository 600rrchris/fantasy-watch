var express = require('express');
var router = express.Router();
var playersCtrl = require('../../controllers/players')
var request = require('request');
const rootURL = 'http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/REG/1/injuries.json'
var token = process.env.NFL_TOKEN;
/* GET users listing. */

router.get('/', playersCtrl.index);
router.get('/new', playersCtrl.new);
router.post('/players', playersCtrl.create);

module.exports = router;
