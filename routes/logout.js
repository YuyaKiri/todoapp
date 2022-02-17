const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  //req.session = null;
  req.logout();
  res.redirect('/');
});

module.exports = router;