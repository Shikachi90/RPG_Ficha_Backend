const Ficha = require("../db/db.ficha");
const gerarID = require("../gerarID");

async function criarFicha(dados) {
  const novo_ID = gerarID();
  try {
    try {
      const novaFicha = await Ficha.create({
        id_ficha: novo_ID,
        nomeJogador: dados.nomeJogador,
        nomePersonagem: dados.nomePersonagem,

        forca: dados.forca,
        mobilidade: dados.mobilidade,
        destreza: dados.destreza,
        vigor: dados.vigor,
        intelecto: dados.intelecto,
        instinto: dados.instinto,
        vida: dados.vida,
        defesa: dados.defesa,
        humanidade: dados.humanidade,
        marca: dados.marca,
        marcaEnergia: dados.marcaEnergia,

        descricao: dados.descricao,
        aparencia: dados.aparencia,
        historia: dados.historia,
        objetivo: dados.objetivo,
        trabalho: dados.trabalho,

        tracosPositivos: dados.tracosPositivos,
        tracosNegativos: dados.tracosNegativos,
        especialidades: dados.especialidades,
        ataques: dados.ataques,
        niveisArmas: dados.niveisArmas,
        inventario: dados.inventario,
      });

      console.log(
        `Personagem ${dados.nomePersonagem} de ${dados.nomeJogador} criado com sucesso!`,
      );
    } catch (err) {
      console.error(`Erro ao criar ficha: ${err}`);
      return { status: 500, error: err };
    }
  } catch (err) {
    console.error(`Erro ao criar ficha: ${err}`);
    return { status: 500, error: err };
  }

  return {
    status: 201,
    response: {
      Id_ficha: novo_ID,
    },
  };
}

module.exports = criarFicha;
