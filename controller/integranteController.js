const { Op } = require("sequelize");
const Integrante = require("../models/integrante");

async function abreadd(req, res) {
  res.render("integrante/add.ejs", {});
}

async function add(req, res) {
  const { nome, dob, numgrupo, stagename, genero } = req.body;
  await Integrante.create({ nome, dob, numgrupo, stagename, genero }).then((integrante) => {
    res.redirect("/integrante");
  });
}

async function abreedt(req, res) {
  let integrante = await Integrante.findByPk(req.params.id);
  res.render("integrante/edt.ejs", { integrante: integrante });
}

async function edt(req, res) {
  let integrante = await Integrante.findByPk(req.params.id);
  integrante.nome = req.body.nome;
  integrante.dob = req.body.dob;
  integrante.stagename = req.body.stagename;
  integrante.genero = req.body.genero;
  integrante.numgrupo = req.body.numgrupo;
  await integrante.save();
  res.redirect("/integrante");
}

async function list(req, res) {
  let integrantes = await Integrante.findAll();
  res.render("integrante/index.ejs", { Integrantes: integrantes });
}

async function listfiltro(req, res) {
  let pesquisar = req.body.pesquisar;
  let integrantes = await Integrante.findAll({
    where: { nome: { [Op.like]: "%" + pesquisar + "%" } },
  });
  res.render("integrante/index.ejs", { Integrantes: integrantes });
}

async function del(req, res) {
  let integrante = await Integrante.findByPk(req.params.id);
  await integrante.destroy();
  res.redirect("/integrante");
}

module.exports = { abreadd, add, list, listfiltro, abreedt, edt, del };
