var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next){
  if (!req.user) {
    res.redirect('/');
  }
  next();
});
router.get('/', function(req, res) {
    console.log("logged out!");
    req.logout();
    res.redirect('https://accounts.google.com/logout');
});

module.exports = router;
