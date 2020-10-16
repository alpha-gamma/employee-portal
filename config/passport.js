const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('../models/user');

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, async (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user || !(await user.validatePassword(password))) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
