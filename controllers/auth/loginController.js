const db = require('../../models')

const newo_user = db.newo_user

const login = async (req,res) => {
    console.log(req.body);
    const { email, password } = req.body;
    
    let loginuser = await newo_user.findOne({
        where:{ email: email, password: password},
        attributes: ['name', 'email']
    })
    res.status(200).send(loginuser)
}

module.exports = {
    login
}


