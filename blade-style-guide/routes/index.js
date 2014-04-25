var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Style Guide', description: 'work hey' });
});

module.exports = router;
