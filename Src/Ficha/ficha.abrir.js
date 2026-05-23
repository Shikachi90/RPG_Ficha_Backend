const Ficha = require('../db/db.ficha');

async function abrirFicha(id) {
    try{
        const fichaInt = await Ficha.findOne({ where: { id_ficha: id } });
        if (fichaInt === null) {
            console.error('Ficha não encontrada')
            return { status: 404, response: "Ficha não encontrada"};

        } else {
            console.error('Ficha encontrada com sucesso!')
            return { status: 200, response: {
                    dados : fichaInt
                } };
        }
    }catch(err) {
        console.error(`Erro: ${err}`);
    }
}

module.exports = abrirFicha;