"use strict";

require("dotenv").config();

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const db = {};

// Configuração direta via variáveis de ambiente (Perfeito para o Render e TiDB Cloud)
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 4000,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  },
);

// Testa a conexão de forma assíncrona real
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Conexão do banco de dados realizada com sucesso ao TiDB Cloud!",
    );
  })
  .catch((err) => {
    console.error(`Erro ao conectar com o banco de dados: ${err}`);
  });

// Carrega os modelos da pasta automaticamente
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes,
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
