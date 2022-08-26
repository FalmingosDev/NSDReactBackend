const db = require('../models');

// create main model
const cartification = db.cartification

// 1. get all Cartification
const getAllCartification = async(req, res) => {
    let cartification_list = await cartification.findAll({
        attributes: ['id', 'certification']
    })
    res.status(200).send(cartification_list)
}

module.exports = {
    getAllCartification
}

