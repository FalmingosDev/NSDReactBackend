'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hashtag_client_masters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      client_name: {
        type: Sequelize.STRING(45)
      },
      client_logo: {
        type: Sequelize.STRING(100)
      },
      client_country: {
        type: Sequelize.INTEGER
      },
      client_state: {
        type: Sequelize.STRING(100)
      },
      client_city: {
        type: Sequelize.STRING(100)
      },
      client_pincode: {
        type: Sequelize.INTEGER
      },
      client_address: {
        type: Sequelize.STRING
      },
      client_details: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('hashtag_client_masters');
  }
};