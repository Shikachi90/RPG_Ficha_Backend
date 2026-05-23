const Trabalhos = require('../db/db.trabalhos');

async function buscarTrabalhos(id) {
    try{
        if (id === undefined) {
            const res = await Trabalhos.findAll();
            if (res === null) {
                console.error('Não foi possivel retornar os trabalhos')
                return {status: 404, response: "Trabalhos não encontrados"};

            } else {
                console.error('Trabalhos encontrada com sucesso!')
                return {
                    status: 200, response: {
                        dados: res
                    }
                };
            }
        } else {
            const res = await Trabalhos.findByPk(id);
            if (res === null) {
                console.error('Trabalho não encontrada')
                return {status: 404, response: "Trabalho não encontrada"};

            } else {
                console.error('Trabalho encontrado com sucesso!')
                return {
                    status: 200, response: {
                        dados: res
                    }
                };
            }
        }
    }catch(err) {
        console.error(`Erro: ${err}`);
    }
}

module.exports = buscarTrabalhos;