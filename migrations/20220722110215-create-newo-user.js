'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('newo_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      country_code: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      profile_pic: {
        type: Sequelize.STRING
      },
      otp: {
        type: Sequelize.STRING
      },
      referral_code: {
        type: Sequelize.STRING
      },
      wallet_coin: {
        type: Sequelize.INTEGER
      },
      active_date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.CHAR
      },
      created_ts: {
        type: Sequelize.DATE
      },
      updated_ts: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('newo_users');
  }
};