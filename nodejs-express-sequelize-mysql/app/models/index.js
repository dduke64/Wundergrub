const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.transactions = require("./transactions.model.js")(sequelize, Sequelize);
db.harvests = require("./harvests.model.js")(sequelize, Sequelize);
db.announcements = require("./announcements.model.js")(sequelize, Sequelize);
db.reports = require("./reports.model.js")(sequelize, Sequelize);


module.exports = db;