const dbConfig = require("../config/config.json");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    dialect: 'postgres',
    host: dbConfig.host
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.js")(sequelize, Sequelize);
db.moviess = require("./movie.js")(sequelize, Sequelize);

module.exports = db;

