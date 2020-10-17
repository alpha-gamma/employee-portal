const expressJwt = require('express-jwt');

function isAuthenticated() {
  return expressJwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] });
}

const ensureAuthUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.redirect('/user/login');
  }
};

const ensureManager = (req, res, next) => {
  if (req.isAuthenticated()) {
    if (req.user.role == 'manager') {
      next();
      return;
    }
  }
  return res.redirect('/');
};

module.exports = {
  isAuthenticated,
  ensureAuthUser,
  ensureManager,
};
