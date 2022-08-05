'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hashtag_user_addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      language: {
        type: Sequelize.STRING
      },
      profession: {
        type: Sequelize.STRING
      },
      maritial_status: {
        type: Sequelize.STRING
      },
      user_country: {
        type: Sequelize.INTEGER
      },
      user_state: {
        type: Sequelize.STRING
      },
      user_city: {
        type: Sequelize.STRING
      },
      user_pincode: {
        type: Sequelize.INTEGER
      },
      user_address: {
        type: Sequelize.STRING
      },
      user_landmark: {
        type: Sequelize.STRING
      },
      user_contact_number: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('hashtag_user_addresses');
  }
};