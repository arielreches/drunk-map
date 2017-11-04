var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/yes_page', function(req, res, next) {
    res.render('yes');
});

router.post('/yes_page', function(req, res, next) {
    res.render('yes');
});

module.exports = router;
