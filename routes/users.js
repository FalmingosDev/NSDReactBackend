var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('respond with a resource');
    res.render('user', { title: 'Respond with a resource' });
});
router.get('/list', function(req, res, next) {
    // res.send('respond with a list');
    res.render('user', { title: 'Respond with a list' });
});
router.get('/add', function(req, res, next) {
    // res.send('respond with a add user');
    res.render('user', { title: 'Respond with a add user' });
});


module.exports = router;