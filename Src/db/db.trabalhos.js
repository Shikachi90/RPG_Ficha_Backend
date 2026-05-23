const { DataTypes } = require('sequelize');
const db = require('../../db/models'); // Sua conexão

const Trabalhos = db.sequelize.define('Trabalhos', {
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

    // 3. Atributos (Mapeando p_for para forca)
    especialidade01: {
        type: DataTypes.INTEGER,
        field: 'specialties_01',
        defaultValue: null
    },
    especialidade02: {
        type: DataTypes.INTEGER,
        field: 'specialties_02',
        defaultValue: null
    },
    traco01: {
        type: DataTypes.INTEGER,
        field: 'traits_01',
        defaultValue: null
    },
    traco02: {
        type: DataTypes.INTEGER,
        field: 'traits_02',
        defaultValue: null
    },
    habilidade_01: {
        type: DataTypes.STRING(100),
        field: 'ability_01',
        defaultValue: null
    },
    habilidade_02: {
        type: DataTypes.STRING(100),
        field: 'ability_02',
        defaultValue: null
    },
  // 4. Descrições
    kit_inicial: { type: DataTypes.STRING(100), field: 'initial_kit' },
    descricao: { type: DataTypes.STRING(255), field: 'description' },

}, {
    // CONFIGURAÇÕES DA TABELA
    tableName: 'jobs', // O nome exato da tabela no MySQL
    timestamps: false,   // Você NÃO colocou colunas 'createdAt' e 'updatedAt' no SQL, então desligamos isso.
});

module.exports = Trabalhos;