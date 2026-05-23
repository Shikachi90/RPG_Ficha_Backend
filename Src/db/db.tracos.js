const { DataTypes } = require('sequelize');
const db = require('../../db/models'); // Sua conexão

const Tracos = db.sequelize.define('Tracos', {
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
    pontos: {
        type: DataTypes.INTEGER,
        field: 'points',
    },
    categoria: {
        type: DataTypes.ENUM('positive', 'negative', 'work'),
        field: 'category',
    },

    efeito: {
        type: DataTypes.STRING(255),
        field: 'effect',
    },

    descricao: {
        type: DataTypes.STRING(255),
        field: 'description' },

}, {
    // CONFIGURAÇÕES DA TABELA
    tableName: 'traits', // O nome exato da tabela no MySQL
    timestamps: false,   // Você NÃO colocou colunas 'createdAt' e 'updatedAt' no SQL, então desligamos isso.
});

module.exports = Tracos;