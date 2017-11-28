var express = require('express');
var router = express.Router();
var models = require('../models/user.js');
var User = models.User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = new User({
    email : 'nowind_lee@qq.com',
    name : 'Freewind'
  });
  user.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('meow');
    }
  });
  res.send('Data inited');
});
module.exports = router;
