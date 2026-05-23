const Especialidades = require('../db/db.especialidades');

async function buscarEspecialidade(id) {
    try{
        if (id === undefined) {
            const res = await Especialidades.findAll();
            if (res === null) {
                console.error('Não foi possivel retornar as especialidades')
                return {status: 404, response: "Especialidades não encontradas"};

            } else {
                console.error('Especialidades encontradas com sucesso!');
                return {
                    status: 200, response: {
                        dados: res
                    }
                };
            }
        } else {
            const res = await Especialidades.findByPk(id);
            if (res === null) {
                console.error('Especialidade não encontrada')
                return {status: 404, response: "Especialidade não encontrada"};

            } else {
                console.error('Especialidade encontrada com sucesso!')
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

module.exports = buscarEspecialidade;