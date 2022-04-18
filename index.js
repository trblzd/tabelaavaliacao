var express = require("express");
var app = express();

const integranteRoute = require("./routes/integranteRoute");
const grupoRoute = require("./routes/grupoRoute");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(express.static("./public"));

require("./config/database.js");

app.use("/integrante", integranteRoute);
app.use("/grupo", grupoRoute);

app.listen("3000", function () {
  console.log("Conexão iniciada na porta 3000");
});
