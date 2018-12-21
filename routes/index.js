var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next){
    if (!req.user) {
        res.redirect('/');
    }
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var email = req.user.email;
  var imagePath = "../images/";

  if ((email.indexOf("jiju") !== -1) ||(email.indexOf("jane") !== -1))  {
    imagePath += "lijo.jpg";
  } else if ((email.indexOf("lijo") !== -1) ||(email.indexOf("vidhu") !== -1))  {
      imagePath += "augustine.jpg";
  } else if (email.indexOf("riya") !== -1)  {
      imagePath += "subin.jpg";
  } else if ((email.indexOf("subin") !== -1) ||(email.indexOf("anisha") !== -1))  {
      imagePath += "sanju.png";
  } else if ((email.indexOf("sanju") !== -1) ||(email.indexOf("sunu") !== -1))  {
      imagePath += "melwin.jpg";
  }else if ((email.indexOf("jainy") !== -1) || (email.indexOf("Jainy") !== -1)) {
      imagePath += "jiju.jpg";
  } else {
      imagePath += "jesus.jpg"
  }

    res.render('index', {user:{
          name: req.user.displayName,
          image: req.user.image,
          imagePath: imagePath,
          email: req.user.email
      }});
});

module.exports = router;
