function ListarFichas() {
    try {
        return { status: 200, response: "Fodasse" }
    } catch(e) {
        return { status: 500, response: e };
    }
}

module.exports = ListarFichas;