const { Op } = require("sequelize");
const Grupo = require("../models/grupo");

async function abreadd(req, res) {
  res.render("grupo/add.ejs", {});
}

async function add(req, res) {
  const { nome, debutano, nummembros, musicadebut, geracao, ultimocb, categoria } = req.body;
  await Grupo.create({ nome, debutano, nummembros, musicadebut, geracao, ultimocb, categoria }).then((grupo) => {
    res.redirect("/grupo");
  });
}

async function abreedt(req, res) {
  let grupo = await Grupo.findByPk(req.params.id);
  res.render("grupo/edt.ejs", { grupo: grupo });
}

//alterar dados
async function edt(req, res) {
  let grupo = await Grupo.findByPk(req.params.id);
  grupo.nome = req.body.nome;
  grupo.debutano = req.body.debutano;
  grupo.nummembros = req.body.nummembros;
  grupo.musicadebut = req.body.musicadebut;
  grupo.geracao = req.body.geracao;
  grupo.ultimocb = req.body.ultimocb;
  grupo.categoria = req.body.categoria;

  await grupo.save();
  res.redirect("/grupo");
}

async function list(req, res) {
  let grupos = await Grupo.findAll();
  res.render("grupo/index.ejs", { Grupos: grupos });
}

async function listfiltro(req, res) {
  let pesquisar = req.body.pesquisar;
  let grupos = await Grupo.findAll({
    where: { debutano: { [Op.like]: "%" + pesquisar + "%" } },
  });
  res.render("grupo/index.ejs", { Grupos: grupos });
}

async function del(req, res) {
  let grupo = await Grupo.findByPk(req.params.id);
  await grupo.destroy();
  res.redirect("/grupo");
}

module.exports = { abreadd, add, list, listfiltro, abreedt, edt, del };
