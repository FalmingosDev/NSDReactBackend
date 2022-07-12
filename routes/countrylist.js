var express = require('express');
var router = express.Router();

/* GET Country listing. */
router.get('/', function(req, res, next) {
    // res.send('Respond with a resource');
    // res.send(JSON.stringify(res));
    // console.log(res);
    res.render('user', { title: 'Respond with a Country List' });
});

module.exports = router;