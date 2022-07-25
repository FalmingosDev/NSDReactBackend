var express = require('express');
var router = express.Router();
const login = require('../controllers/auth/loginController');

const auth = require("../middleware/auth");

router.get('/login', auth, function(req,res,next){
    res.send('Respond with a login');
})