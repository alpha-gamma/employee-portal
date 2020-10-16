const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json([
    {
      id: 1,
      name: 'abc',
    },
    {
      id: 2,
      name: 'xyz',
    },
  ]);
  // res.render('index', { title: 'my title' });
});

module.exports = router;
