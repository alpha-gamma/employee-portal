var express = require('express');
const { isAuthenticated } = require('../middlewares/auth');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.isAuthenticated());
  console.log(req.user);
  res.render('index', { title: 'Express', user: req.user ? req.user.toAuthJson() : null });
});

module.exports = router;
