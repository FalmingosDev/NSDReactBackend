'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('spin_prizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      spin_id: {
        type: Sequelize.INTEGER
      },
      prize_name: {
        type: Sequelize.STRING
      },
      encode_prize: {
        type: Sequelize.STRING(20)
      },
      qty: {
        type: Sequelize.INTEGER
      },
      picture: {
        type: Sequelize.STRING(100)
      },
      newocoin_prize: {
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
    await queryInterface.dropTable('spin_prizes');
  }
};