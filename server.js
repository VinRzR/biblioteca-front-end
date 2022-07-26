const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 4200;
const app = express();

app.use(express.static(__dirname + "/dist/trab-final-baldochi"));
app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/dist/trab-final-baldochi/index.html");
});

app.listen(PORT, () => {
  console.log("Servidor inciado na porta" + PORT);
});
