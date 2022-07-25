const db = require('../../models')

const newo_user = db.newo_user

const login = async (req,res) => {
    const { email, password } = req.body;
    
    let loginuser = await newo_user.findOne({where:{ email: email, password:password}})
    if (loginuser) {
        // Generate an access token
        const accessToken = jwt.sign({ name: loginuser.name,  email: loginuser.email }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('Email or password incorrect');
    }
}

module.exports = {
    login
}


