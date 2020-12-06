var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Books collection' });
});

router.get('/about', function (req, res, next) {
    res.render('about', { title: ' books colleciton' });
});

router.get('/login', function (req, res, next) {
    res.render('login', { title: ' login' });
});

router.get('/register', function (req, res, next) {
    res.render('register', { title: ' register' });
});

module.exports = router;
