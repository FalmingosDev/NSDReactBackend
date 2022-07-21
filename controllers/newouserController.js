const db = require('../models');

// create main model
const newo_user = db.newo_user

// 1. get all Country
const getAllNewoUser = async(req, res) => {
    let newouser = await newo_user.findAll({
    })
    res.status(200).send(newouser)
}

module.exports = {
    getAllNewoUser
}