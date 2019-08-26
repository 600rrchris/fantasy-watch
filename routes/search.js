var express = require('express');
var router = express.Router();
var searchCtrl = require('../controllers/search')
/* GET users listing. */


router.get('/', searchCtrl.index);
router.post('/', searchCtrl.create);

module.exports = router;
