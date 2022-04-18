var express = require("express");
var router = express.Router();
const grupoController = require("../controller/grupoController");

//listar todos os dados
router.get("/", grupoController.list);
//listar dados com filtro
router.post("/", grupoController.listfiltro);
//abre add
router.get("/add", grupoController.abreadd);
router.post("/add", grupoController.add);
//adicionar dados no banco
//abrir editar
router.get("/edt/:id", grupoController.abreedt);

router.post("/edt/:id", grupoController.edt);
//deletar dados
router.get("/del/:id", grupoController.del);

module.exports = router;
