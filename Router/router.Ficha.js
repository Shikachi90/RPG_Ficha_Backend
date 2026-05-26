const express = require("express");
const router = express.Router();
//
const criarFicha = require("../Src/Ficha/ficha.criar");
const editarFicha = require("../Src/Ficha/ficha.editar");
const abrirFicha = require("../Src/Ficha/ficha.abrir");
const deletarFicha = require("../Src/Ficha/ficha.deletar");

router.get("/:id", async (req, res) => {
  const id_ficha = req.params.id;
  const response = await abrirFicha(id_ficha);

  if (response.status !== 200) {
    return res.status(response.status).json(response.response);
  }

  return res.status(response.status).json(response.response);
});

router.post("/", async (req, res) => {
  let dados = {};

  for (const key in req.body) {
    const keyB = key;
    dados[keyB] = req.body[keyB];
  }

  let tracos = dados.traços;

  let tracosPositivos = [];
  let tracosNegativos = [];

  for (let i = 0; i < tracos.length; i++) {
    if (tracos[i].categoria === "pos") {
      tracosPositivos.push(tracos[i]);
    } else if (tracos[i].categoria === "neg") {
      tracosNegativos.push(tracos[i]);
    }
  }

  dados.tracosPositivos = tracosPositivos;
  dados.tracosNegativos = tracosNegativos;

  const response = await criarFicha(dados);

  if (response.status !== 200) {
    console.log(
      `Resposta é Status: '${response.status}', Error: '${response.error}'`,
    );
    return res.status(response.status).json(response.error);
  }

  console.log(
    `Resposta é Status: '${response.status}', Resposta é '${response.response}'`,
  );
  return res.status(response.status).json(response.response);
}); // Aonde mostra a ficha completa

router.put("/:id", async (req, res) => {
  let id = req.params.id;
  let dados = {};

  for (const key in req.body) {
    const keyB = key;
    dados[keyB] = req.body[keyB];
  }

  const response = await editarFicha(dados, id);

  return res.status(response.status).json(response.response);
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;

  const response = await deletarFicha(id);
  return res.status(response.status).json(response.response);
});

//
// router.post("/criar/etapa1", ); // Aonde o jogador clicou para adicionar as informações, nome do player, nome do personagem, aparencia do personagem, história, descrição e
//
// router.post("/criar/etapa2", ); // Aonde o jogador vai escolher Trabalho e traços
//
// router.post("/criar/etapa3", (req, res) => {
//    const response = criarFicha(req.body);
// }); // Aonde o jogador vai escolher especialidades
//

module.exports = router;
