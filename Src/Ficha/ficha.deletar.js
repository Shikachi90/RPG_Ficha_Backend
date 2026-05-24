const Ficha = require("../db/db.ficha");

async function fichaDeletar(id) {
  try {
    await Ficha.destroy({
      where: { id_ficha: id },
    });

    console.log(`Ficha deletada com sucesso!`);
    return { status: 200, response: "Ficha deletada com sucesso!" };
  } catch (err) {
    console.error(`Erro: ${err}`);
    return { status: 500, response: "Erro ao deletar ficha" };
  }
}

module.exports = fichaDeletar;
