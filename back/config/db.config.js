module.exports = {
  HOST: "localhost",
  PORT: 80,
  USER: "root",
  PASSWORD: "Dr@gon405001",
  DB: "BDD",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
