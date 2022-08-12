'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hashtag_user_interest_txns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      subscriber_id: {
        type: Sequelize.INTEGER
      },
      hashtag_interest: {
        type: Sequelize.STRING
      },
      social_link1: {
        type: Sequelize.STRING
      },
      social_link2: {
        type: Sequelize.STRING
      },
      social_link3: {
        type: Sequelize.STRING
      },
      social_link4: {
        type: Sequelize.STRING
      },
      social_link5: {
        type: Sequelize.STRING
      },
      social_link6: {
        type: Sequelize.STRING
      },
      social_link7: {
        type: Sequelize.STRING
      },
      social_link8: {
        type: Sequelize.STRING
      },
      active_inactive: {
        type: Sequelize.CHAR(1)
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
    await queryInterface.dropTable('hashtag_user_interest_txns');
  }
};