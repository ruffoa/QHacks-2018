var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/page', function (req, res, next) {
    res.render('users', {title: 'Express'});
});

module.exports = router;
