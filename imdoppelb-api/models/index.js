const dbConfig = require("../config/config.json");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.development.database,
  dbConfig.development.username,
  dbConfig.development.password,
  {
    dialect: "postgres",
    host: "127.0.0.1",
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.movies = require("./movie.js")(sequelize, Sequelize);

module.exports = db;
