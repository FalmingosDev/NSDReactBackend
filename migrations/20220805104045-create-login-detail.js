'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('login_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      lat: {
        type: Sequelize.DECIMAL(10,2)
      },
      lng: {
        type: Sequelize.DECIMAL(10,2)
      },
      ip: {
        type: Sequelize.STRING(45)
      },
      login_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
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
    await queryInterface.dropTable('login_details');
  }
};