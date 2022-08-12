'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('spin_prize_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      spin_id: {
        type: Sequelize.INTEGER
      },
      spin_prize_id: {
        type: Sequelize.INTEGER
      },
      is_claim: {
        type: Sequelize.CHAR(1),
        defaultValue: "N"
      },
      claim_time: {
        type: Sequelize.DATE
      },
      is_distributed: {
        type: Sequelize.CHAR(1),
        defaultValue: "N"
      },
      distributed_time: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('spin_prize_users');
  }
};