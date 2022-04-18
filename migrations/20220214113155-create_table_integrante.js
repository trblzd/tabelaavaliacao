"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("integrantes", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dob: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      numgrupo: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      stagename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("integrantes");
  },
};
