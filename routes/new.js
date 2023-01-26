var express = require('express');
var router = express.Router();
var messages = require('../public/javascripts/messages');
var dateOptions = require('../public/javascripts/dateOptions');

/* GET new form. */
router.get('/', function (req, res, next) {
  res.render('form', { info: 'Create a new message' });
});

/* POST new message */
router.post('/', function (req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date().toLocaleTimeString('en-us', dateOptions),
  });
  res.redirect('/');
});

module.exports = router;







