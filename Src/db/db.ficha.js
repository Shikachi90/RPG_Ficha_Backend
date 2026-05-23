const { DataTypes } = require('sequelize');
const db = require('../../db/models'); // Sua conexão

const Ficha = db.sequelize.define('Ficha', {
    // 1. ID
    // 1.5 ID da ficha
    id_ficha: {
        type: DataTypes.STRING(8),
        field: 'id_ficha',
        allowNull: false,
        unique: true
    },

    // 2. Nomes (Mapeando name_player para nomeJogador)
    nomeJogador: {
        type: DataTypes.STRING(100),
        field: 'name_player', // <--- O NOME REAL NO BANCO
    },
    nomePersonagem: {
        type: DataTypes.STRING(100),
        field: 'name_char',
        validate: {
            len: [3, 50], // Nome deve ter entre 3 e 50 caracteres
            notEmpty: true
        }
    },

    // 3. Atributos (Mapeando p_for para forca)
    forca: {
        type: DataTypes.INTEGER,
        field: 'p_for', // O Sequelize lê 'p_for' do banco e joga na variavel 'forca'
        defaultValue: 0
    },
    mobilidade: {
        type: DataTypes.INTEGER,
        field: 'p_mob',
        defaultValue: 0
    },
    destreza: {
        type: DataTypes.INTEGER,
        field: 'p_des',
        defaultValue: 0
    },
    vigor: {
        type: DataTypes.INTEGER,
        field: 'p_vig',
        defaultValue: 0
    },
    intelecto: {
        type: DataTypes.INTEGER,
        field: 'p_int',
        defaultValue: 0
    },

    instinto: {
        type: DataTypes.INTEGER,
        field: 'p_ins',
        defaultValue: 0
    },

    vida: {
        type: DataTypes.INTEGER,
        field: 'p_vida',
        defaultValue: 0
    },

    defesa: {
        type: DataTypes.INTEGER,
        field: 'p_def',
        defaultValue: 0
    },

    humanidade: {
        type: DataTypes.INTEGER,
        field: 'humanity',
        defaultValue: 100,
        validate: {
            min: 0,
            max: 100 // Impede que o mestre sem querer coloque 110% de humanidade
        }
    },

    marca: {
        type: DataTypes.INTEGER,
        field: 'mark'
    },

    marcaEnergia: {
        type: DataTypes.INTEGER,
        field: 'mark_energy',
        defaultValue: 0
    },

    // 4. Descrições
    descricao: { type: DataTypes.STRING(255), field: 'description' },
    aparencia: { type: DataTypes.STRING(255), field: 'appearance' },
    historia: { type: DataTypes.STRING(255), field: 'history' },
    objetivo: { type: DataTypes.STRING(255), field: 'objective' },
    trabalho: { type: DataTypes.STRING(50), field: 'work', defaultValue: 'desempregado' },

    // 5. O Poder do JSON
    // O Sequelize converte automaticamente o JSON do banco para Objeto JS e vice-versa!
    tracosPositivos: {
        type: DataTypes.JSON,
        field: 'positive_traits'
    },
    tracosNegativos: {
        type: DataTypes.JSON,
        field: 'negative_traits'
    },
    tracosTrabalho: {
        type: DataTypes.JSON,
        field: 'work_traits'
    },
    especialidades: {
        type: DataTypes.JSON,
        field: 'specialties'
    },
    ataques: {
        type: DataTypes.JSON,
        field: 'attacks'
    },
    niveisArmas: {
        type: DataTypes.JSON,
        field: 'weapons_level'
    },
    inventario: {
        type: DataTypes.JSON,
        field: 'inv'
    }

}, {
    // CONFIGURAÇÕES DA TABELA
    tableName: 'record', // O nome exato da tabela no MySQL
    timestamps: false,   // Você NÃO colocou colunas 'createdAt' e 'updatedAt' no SQL, então desligamos isso.
});

module.exports = Ficha;