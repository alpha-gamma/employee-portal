const express = require('express');
const ProjectOpening = require('../models/projectOpening');
const UserAppliedOpening = require('../models/userAppliedOpening');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', async (req, res, next) => {
  let projectOpenings;
  let appliedOpenings;
  if (req.user.role == 'manager') {
    projectOpenings = await ProjectOpening.find({ createdBy: req.user._id }).exec();
  } else {
    projectOpenings = await ProjectOpening.find({ status: 'open' }).exec();
    appliedOpenings = await UserAppliedOpening.find({ userId: req.user._id }).exec();
  }
  res.render('current-openings', { projectOpenings, appliedOpenings });
});

router.get('/new', (req, res, next) => {
  console.log('##########################################################################################################');
  res.render('add-update-opening', { projectOpening: {} });
});

router.get('/:projectOpeningId', async (req, res, next) => {
  const projectOpeningDetails = await ProjectOpening.findOne({ _id: req.params.projectOpeningId }).exec();
  if (projectOpeningDetails) {
    res.render('project-opening-detail', { projectOpening: projectOpeningDetails });
  }
});



router.get('/:projectOpeningId/edit', auth.ensureManager, async (req, res, next) => {
  const projectOpeningDetails = await ProjectOpening.findOne({ _id: req.params.projectOpeningId }).exec();
  if (projectOpeningDetails) {
    res.render('add-update-opening', { projectOpening: projectOpeningDetails });
  }
});

router.post('/:projectOpeningId/close', auth.ensureManager, async (req, res, next) => {
  await ProjectOpening.findOneAndUpdate({ _id: req.params.projectOpeningId }, { $set: { status: 'close' } }).exec();
  res.redirect('/projectOpening');
});

router.post('/:projectOpeningId/open', auth.ensureManager, async (req, res, next) => {
  await ProjectOpening.findOneAndUpdate({ _id: req.params.projectOpeningId }, { $set: { status: 'open' } }).exec();
  res.redirect('/projectOpening');
});

router.post('/:projectOpeningId/apply', async (req, res, next) => {
  const userAppliedOpening = new UserAppliedOpening();
  userAppliedOpening.projectOpeningId = req.params.projectOpeningId;
  userAppliedOpening.userId = req.user._id;
  await userAppliedOpening.save();
  res.redirect('/projectOpening');
});

router.post('/', auth.ensureManager, async (req, res, next) => {
  if (req.body._id) {
    await ProjectOpening.findOneAndUpdate({ _id: req.body._id }, { $set: req.body }).exec();
    res.redirect('/projectOpening');
  } else {
    const projectOpening = new ProjectOpening(req.body);
    await projectOpening.save();
    res.redirect('/projectOpening');
  }
});

module.exports = router;
