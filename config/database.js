const sequelize = require("sequelize");

const dbconfig = require("./dbconfig");

const conexao = new sequelize(dbconfig);

const Integrante = require("../models/integrante");

const Grupo = require("../models/grupo")

Integrante.init(conexao);
Grupo.init(conexao);

module.exports = conexao;

