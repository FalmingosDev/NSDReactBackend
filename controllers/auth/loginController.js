const db = require('../../models')
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

const config = process.env;

const newo_user = db.newo_user

const login = async (req,res) => {
    //console.log(req.body);
    const { email, password } = req.body;
    
    let loginuser = await newo_user.findOne({
        where:{ email: email, password: password},
        attributes: ['id', 'name', 'email']
    })

    if(loginuser){
        // console.log(loginuser.dataValues['email'])
        let loguser = {'userid':loginuser.dataValues['id'], 'email':loginuser.dataValues['email']}

        let token = jwt.sign(loguser, config.TOKEN_KEY)
        // let token = ''

        let logdata = {'token':token}
        res.status(200).send(logdata)
    }
    else{
        res.status(400).send("Invalid Credential")
    }
}


module.exports = {
    login
}


