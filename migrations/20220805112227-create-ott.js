'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('otts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      season: {
        type: Sequelize.INTEGER
      },
      episode: {
        type: Sequelize.INTEGER
      },
      media: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.STRING
      },
      show_banner: {
        type: Sequelize.CHAR
      },
      thumb: {
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
      watch_coin: {
        type: Sequelize.INTEGER
      },
      duration_sec: {
        type: Sequelize.BIGINT
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
    await queryInterface.dropTable('otts');
  }
};