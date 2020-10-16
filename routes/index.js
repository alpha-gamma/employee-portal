var express = require('express');
const { isAuthenticated } = require('../middlewares/auth');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('/projectOpening');
});

module.exports = router;
