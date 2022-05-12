const dbconfig = require("../config/db.config");

const sequelize = require("sequelize");
const sequelizeInstance = new sequelize(
  dbconfig.DB,
  dbconfig.USER,
  dbconfig.PASSWORD,
  {
    host: dbconfig.HOST,
    port: dbconfig.PORT,
    dialect: dbconfig.dialect,
    pool: {
      max: dbconfig.pool.max,
      min: dbconfig.pool.min,
      acquire: dbconfig.pool.acquire,
      idle: dbconfig.pool.idle,
    },
  }
);

sequelizeInstance
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};
db.sequelize = sequelizeInstance;
db.Sequelize = sequelize;
db.User = require("../models/User.js")(sequelizeInstance, sequelize);

module.exports = sequelizeInstance;
