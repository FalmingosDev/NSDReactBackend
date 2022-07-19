var express = require('express');
var router = express.Router();
const countryController = require('../controllers/countryController.js');

/* GET Country listing. */
// router.get('/', function(req, res, next) {
//     // res.send('Respond with a resource');
//     // res.send(JSON.stringify(res));
//     // console.log(res);
//     // res.render('user', { title: 'Respond with a Country List' });
//     router.get('/', countryController.getAllCountry);
// });

router.get('/', countryController.getAllCountry);

module.exports = router;