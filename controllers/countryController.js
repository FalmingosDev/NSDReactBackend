const db = require('../models');

// create main model
const country_list = db.country_list

// 1. get all Country
const getAllCountry = async(req, res) => {
    let country = await country_list.findAll({
        attributes: ['id', 'Name', 'Code', 'ISD']
    })
    res.status(200).send(country)
}

module.exports = {
    getAllCountry
}