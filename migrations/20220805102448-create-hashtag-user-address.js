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
        type: Sequelize.STRING(45)
      },
      user_country: {
        type: Sequelize.INTEGER
      },
      user_state: {
        type: Sequelize.STRING(100)
      },
      user_city: {
        type: Sequelize.STRING(100)
      },
      user_pincode: {
        type: Sequelize.INTEGER
      },
      user_address: {
        type: Sequelize.STRING
      },
      user_landmark: {
        type: Sequelize.STRING(100)
      },
      user_contact_number: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('hashtag_user_addresses');
  }
};