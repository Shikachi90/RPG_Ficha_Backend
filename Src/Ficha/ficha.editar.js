const Ficha = require('../db/db.ficha');

async function fichaEditar(dados, id) {
    try{
        await Ficha.update(dados, {
            where: { id_ficha: id }
        });

        console.log(`Ficha atualizada com sucesso!`);
        return { status: 200, response: "Ficha atualizada com sucesso!"};

    }catch(err) {
        console.error(`Erro: ${err}`);
        return { status: 500, response: "Erro ao atualizar ficha" };
    }
}

module.exports = fichaEditar;