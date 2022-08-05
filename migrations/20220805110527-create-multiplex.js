'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('multiplexes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      creator_id: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      tag_line: {
        type: Sequelize.STRING
      },
      media: {
        type: Sequelize.STRING
      },
      trailer: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      synopsis: {
        type: Sequelize.TEXT
      },
      stars: {
        type: Sequelize.TEXT
      },
      genere: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.INTEGER
      },
      certificate: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      use_coin: {
        type: Sequelize.INTEGER
      },
      use_amount: {
        type: Sequelize.DECIMAL
      },
      reting: {
        type: Sequelize.DECIMAL
      },
      views: {
        type: Sequelize.INTEGER
      },
      duration_sec: {
        type: Sequelize.INTEGER
      },
      duration_time: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      show_banner: {
        type: Sequelize.CHAR
      },
      status: {
        type: Sequelize.CHAR
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
    await queryInterface.dropTable('multiplexes');
  }
};