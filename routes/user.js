const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const auth = require('../middlewares/auth');

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.get('/logout', function (req, res, next) {
  req.logout();
  res.redirect('/');
});

router.get('/register', function (req, res, next) {
  res.render('register');
});

router.get('/profile', auth.ensureAuthUser, function (req, res, next) {
  if (req.user) {
    res.render('profile');
  } else {
    res.redirect('/user/login');
  }
});

router.post('/register', async function (req, res, next) {
  const user = new User(req.body);
  const userInDb = await User.findOne({ username: user.username }).exec();
  if (userInDb) {
    console.error('User with email already exists. Please enter different email.');
    req.flash('error', 'User with email already exists.');
    res.redirect('/user/register');
    return;
  }
  await user.hashPassword();
  user.save((err, savedUser) => {
    if (err) {
      console.error(`Error while creating a user: ${err}`);
      return;
    }
    req.login(savedUser, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/');
    });
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
  }
);

module.exports = router;
