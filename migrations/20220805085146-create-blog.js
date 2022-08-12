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
        type: Sequelize.STRING(100)
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
        type: Sequelize.CHAR(1),
        defaultValue: "1",
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('blogs');
  }
};