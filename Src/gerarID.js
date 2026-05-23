function gerarID() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const tamanho = caracteres.length;

    let id = 'A';

    for (let i = 0; i < 7; i++) {
        let randomInt = caracteres.charAt(Math.floor(Math.random() * tamanho));
        id = `${id}${randomInt}`
        //console.log(`Caractere escolhido: '${randomInt}' atualmente o id é: '${id}'`)
    }

    //console.log(id);
    return id;
}

module.exports = gerarID;