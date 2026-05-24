const express = require("express");
const cors = require("cors");

const fichaRouter = require("./Router/router.Ficha");
const infosRouter = require("./Router/router.Infos");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/ficha", fichaRouter);
app.use("/infos", infosRouter);

// Opcional: Rota de teste para ver se o servidor está vivo
app.get("/", (req, res) => {
  res.send("Servidor RPG Rodando!");
});

app.listen(process.env.PORT, () => {
  console.log(`localhost://${process.env.PORT}`);
});
