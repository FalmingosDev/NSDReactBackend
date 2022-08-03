const db = require('../../models');

// create main model
const newo_user = db.newo_user


const registerUser = async(req, res) => {
    console.log(req);
    let userData = {
        name: req.body.title,
        phone: req.body.price,
        email: req.body.description,
        country_code: req.body.published,
        password: req.body.published
    }

    const newouser = await newo_user.create(userData)

    res.status(200).send(newouser)
}


module.exports = {
    registerUser
}