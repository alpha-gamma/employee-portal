const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.find();
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.get('/register', function (req, res, next) {
  res.render('register');
});

router.get('/logout', function (req, res, next) {
  req.logout();
  res.redirect('/');
});

/**Register new user */
router.post('/register', async function (req, res, next) {
  const user = new User(req.body);
  await user.hashPassword();
  user.save((err, savedUser) => {
    if (err) {
      console.error(`Error while creating a user: ${err}`);
      return;
    }
    res.json(savedUser);
  });
});

/**Login */
router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: 'login',
  }),
  function (req, res, next) {
    res.redirect('/');
    // req.login(req.user, (err) => {
    //   if(err){
    //     return res.redirect('login');
    //   }
    // return res.redirect('/');
    // })
    //res.json(req.user.toAuthJson());
  }
);

module.exports = router;
