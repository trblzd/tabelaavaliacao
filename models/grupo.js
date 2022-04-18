const { Model, DataTypes } = require("sequelize");

class Grupo extends Model {
  static init(conexao) {
    super.init(
      {
        nome: DataTypes.STRING,
        debutano: DataTypes.REAL,
        nummembros: DataTypes.REAL,
        musicadebut: DataTypes.STRING,
        geracao: DataTypes.REAL,
        ultimocb: DataTypes.STRING,
        categoria: DataTypes.STRING,
      },
      { sequelize: conexao, freezeTableName: true, tableName: "grupos" }
    );
  }
}

module.exports = Grupo;
