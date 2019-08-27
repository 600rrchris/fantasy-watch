var router = require('express').Router();
var passport = require('passport');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {player: null, user: req.user});
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
   

            
            
            module.exports = router;
