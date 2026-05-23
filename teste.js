const testando = require('./Src/utils/trabalhos.buscar');

async function Bah() {
    const resposta = await testando();

    console.log(resposta.response.dados);

}

Bah();

