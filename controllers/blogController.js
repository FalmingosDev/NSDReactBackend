const db = require('../models');

// create main model
const blog = db.blog

// 1. get all Blog
const getAllBlog = async(req, res) => {
    let blog_list = await blog.findAll({
        where:{ blog_status: 1},
        attributes: ['id', 'blog_title', 'blog_author', 'author_img', 'blog_date', 'blog_img', 'blog_text', 'blog_status']
    })
    res.status(200).send(blog_list)
}

const getOneBlog = async(req, res) => {

    let blog_id = req.params.id

    let blog_list = await blog.findOne({
        where:{ blog_status: 1, id: blog_id},
        attributes: ['id', 'blog_title', 'blog_author', 'author_img', 'blog_date', 'blog_img', 'blog_text', 'blog_status']
    })
    res.status(200).send(blog_list)
}

module.exports = {
    getAllBlog,
    getOneBlog
}