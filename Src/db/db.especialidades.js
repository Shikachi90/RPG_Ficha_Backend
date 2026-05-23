const { DataTypes } = require('sequelize');
const db = require('../../db/models'); // Sua conexão

const Especialidades = db.sequelize.define('Especialidades', {
    // 1. ID
    // 1.5 ID da ficha
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id',
    },

    // 2. Nomes (Mapeando name_player para nomeJogador)
    nome: {
        type: DataTypes.STRING(100),
        field: 'name', // <--- O NOME REAL NO BANCO
    },
    atributo: {
        type: DataTypes.ENUM('for', 'vig', 'des', 'int', 'ins', 'mob'),
        field: 'attribute',
    },

    descricao: {
        type: DataTypes.STRING(255),
        field: 'description' },

}, {
    // CONFIGURAÇÕES DA TABELA
    tableName: 'specialties', // O nome exato da tabela no MySQL
    timestamps: false,   // Você NÃO colocou colunas 'createdAt' e 'updatedAt' no SQL, então desligamos isso.
});

module.exports = Especialidades;