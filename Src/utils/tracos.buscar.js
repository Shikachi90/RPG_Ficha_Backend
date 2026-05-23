const Tracos = require('../db/db.tracos');

async function buscarTracos(id) {
    try{
        if (id === undefined) {
            const res = await Tracos.findAll();
            if (res === null) {
                console.error('Não foi possivel retornar os tracos')
                return {status: 404, response: "Traços não encontradas"};

            } else {
                console.error('Traços encontrados com sucesso!');
                return {
                    status: 200, response: {
                        dados: res
                    }
                };
            }
        } else {
            const res = await Tracos.findByPk(id);
            if (res === null) {
                console.error('Traço não encontrada')
                return {status: 404, response: "Traco não encontrada"};

            } else {
                console.error('Traço encontrado com sucesso!')
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

module.exports = buscarTracos;