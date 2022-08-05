'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      blog_title: {
        type: Sequelize.STRING
      },
      blog_author: {
        type: Sequelize.STRING
      },
      author_img: {
        type: Sequelize.STRING
      },
      blog_date: {
        type: Sequelize.DATE
      },
      blog_img: {
        type: Sequelize.STRING
      },
      blog_text: {
        type: Sequelize.TEXT
      },
      blog_status: {
        type: Sequelize.CHAR
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('blogs');
  }
};