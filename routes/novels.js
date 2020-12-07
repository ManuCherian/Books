const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Books collection' });
});

//Make Controller Public
module.exports = router