"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("grupos", {
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
      debutano: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      nummembros: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      musicadebut: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      geracao: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      ultimocb: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("grupos");
  },
};
