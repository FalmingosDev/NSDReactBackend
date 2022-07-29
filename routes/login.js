var express = require('express');
var router = express.Router();
const loginController = require('../controllers/auth/loginController');

const auth = require("../middleware/auth");

// router.post('/login', function(req,res,next){
//     res.send('Respond with a login');
// })

router.post('/', loginController.login);

// router.post('/auth', loginController.login);

module.exports = router;