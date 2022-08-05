'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('creators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      newo_user_id: {
        type: Sequelize.INTEGER
      },
      creator_profile_pic: {
        type: Sequelize.STRING
      },
      creator_user_name: {
        type: Sequelize.STRING
      },
      creator_dob: {
        type: Sequelize.DATE
      },
      creator_topic: {
        type: Sequelize.STRING
      },
      creator_desc: {
        type: Sequelize.TEXT
      },
      creator_status: {
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
    await queryInterface.dropTable('creators');
  }
};