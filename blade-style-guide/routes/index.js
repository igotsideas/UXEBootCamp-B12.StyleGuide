var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Do not contact', description: 'work hey' });
});

module.exports = router;
