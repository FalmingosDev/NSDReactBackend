const db = require('../models');

// create main model
const Product = db.products


// 1. get all products
const getAllProducts = async(req, res) => {
    let products = await Product.findAll({
        // attributes: ['title', 'price'] /* For getting specific field*/
    })
    res.status(200).send(products)
}


module.exports = {
    getAllProducts
}