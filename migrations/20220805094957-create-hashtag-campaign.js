'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hashtag_campaigns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      campaign_category: {
        type: Sequelize.STRING
      },
      campaign_name: {
        type: Sequelize.STRING
      },
      campaign_objective: {
        type: Sequelize.TEXT
      },
      client_id: {
        type: Sequelize.INTEGER
      },
      campaign_reward: {
        type: Sequelize.INTEGER
      },
      reward_value: {
        type: Sequelize.STRING
      },
      campaign_social: {
        type: Sequelize.STRING
      },
      campaign_image: {
        type: Sequelize.STRING
      },
      campaign_start_date: {
        type: Sequelize.DATE
      },
      campaign_end_date: {
        type: Sequelize.DATE
      },
      campaign_status: {
        type: Sequelize.CHAR
      },
      campaign_spl_note: {
        type: Sequelize.STRING
      },
      campaign_hashtag: {
        type: Sequelize.STRING
      },
      max_participate: {
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
    await queryInterface.dropTable('hashtag_campaigns');
  }
};