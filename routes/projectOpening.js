const express = require('express');
const projectOpening = require('../models/projectOpening');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('current-openings');
});

router.get('/new', (req, res, next) => {
  res.render('add-update-opening', { projectOpening: new projectOpening() });
});

router.get('/edit/:projectOpeningId', (req, res, next) => {
  res.render('add-update-opening', { projectOpening: new projectOpening() });
});

router.get('/:projectOpeningId', (req, res, next) => {
  res.render('project-opening-details', { projectOpening: new projectOpening() });
});

module.exports = router;
