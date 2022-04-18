var express = require("express");
var router = express.Router();
const integranteController = require("../controller/integranteController");

//listar todos os dados
router.get("/", integranteController.list);
//listar dados com filtro
router.post("/", integranteController.listfiltro);
//abre add
router.get("/add", integranteController.abreadd);
router.post("/add", integranteController.add);
//adicionar dados no banco
//abrir editar
router.get("/edt/:id", integranteController.abreedt);
//editar dados no banco
router.post("/edt/:id", integranteController.edt);
//deletar dados
router.get("/del/:id", integranteController.del);

module.exports = router;
