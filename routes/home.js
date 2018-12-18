var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/auth/google');
 // res.render('index', { title: 'My Xmas friend!' });
});

module.exports = router;
