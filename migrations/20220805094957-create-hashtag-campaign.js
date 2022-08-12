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
        type: Sequelize.STRING(45)
      },
      campaign_name: {
        type: Sequelize.STRING(45)
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
        type: Sequelize.STRING(45)
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
        type: Sequelize.CHAR(1)
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
      campaign_description_link: {
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
    await queryInterface.dropTable('hashtag_campaigns');
  }
};