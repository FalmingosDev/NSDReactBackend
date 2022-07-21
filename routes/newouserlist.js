var express = require('express');
var router = express.Router();
const newouserController = require('../controllers/newouserController.js');

/* GET Country listing. */
// router.get('/', function(req, res, next) {
//     // res.send('Respond with a resource');
//     // res.send(JSON.stringify(res));
//     // console.log(res);
//     // res.render('user', { title: 'Respond with a Country List' });
//     router.get('/', countryController.getAllCountry);
// });

router.get('/', newouserController.getAllNewoUser);

module.exports = router;