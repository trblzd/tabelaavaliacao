const { Model, DataTypes } = require("sequelize");

class Integrante extends Model {
  static init(conexao) {
    super.init(
      {
        nome: DataTypes.STRING,
        dob: DataTypes.DATE,
        numgrupo: DataTypes.SMALLINT,
        stagename: DataTypes.STRING,
        genero: DataTypes.STRING,
      },
      { sequelize: conexao, freezeTableName: true, tableName: "integrantes" }
    );
  }
}

module.exports = Integrante;
