const express = require('express');
const router = express.Router();
//

const buscarTrabalhos = require('../Src/utils/trabalhos.buscar');
const buscarTracos = require('../Src/utils/tracos.buscar');
const buscarEspecialidades = require('../Src/utils/especialidades.buscar');

router.get("/trabalhos", async (req, res) => {

    const response = await buscarTrabalhos();

    return res.status(response.status).json(response.response);

} )

router.get("/trabalhos/:id", async (req, res) => {
    const id = req.params.id;

    const response = await buscarTrabalhos(id);

    return res.status(response.status).json(response.response);
}); // Aonde mostra a ficha completa

router.get("/tracos", async (req, res) => {

    const response = await buscarTracos();

    return res.status(response.status).json(response.response);

});

router.get("/tracos/:id", async (req, res) => {
    const id = req.params.id;

    const response = await buscarTracos(id);

    return res.status(response.status).json(response.response);
}); // Aonde mostra a ficha completa

router.get("/especialidades", async (req, res) => {

    const response = await buscarEspecialidades();

    return res.status(response.status).json(response.response);

});

router.get("/especialidades/:id", async (req, res) => {
    const id = req.params.id;

    const response = await buscarEspecialidades(id);

    return res.status(response.status).json(response.response);
}); // Aonde mostra a ficha completa


// router.put("/:id", async (req, res) => {
//     let id = req.params.id;
//     let dados = {};
//
//     for (const key in req.body) {
//         const keyB = key;
//         dados[keyB] = req.body[keyB];
//     };
//
//     const response =  await editarFicha(dados, id)
//
//     return res.status(response.status).json(response.response);
//
// })

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