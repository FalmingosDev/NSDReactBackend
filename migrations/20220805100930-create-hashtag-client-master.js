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
        type: Sequelize.STRING
      },
      client_logo: {
        type: Sequelize.STRING
      },
      client_country: {
        type: Sequelize.INTEGER
      },
      client_state: {
        type: Sequelize.STRING
      },
      client_city: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('hashtag_client_masters');
  }
};