const expressJwt = require('express-jwt');

function isAuthenticated() {
  return expressJwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] });
}

const ensureAuthUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    req.toastr.error('Please login to view this resource');
    res.redirect('/auth/login');
  }
};

module.exports = {
  isAuthenticated,
  ensureAuthUser,
};
