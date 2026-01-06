const { DataSource } = require("typeorm");
const Show = require("../entities/Show");

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Show],
});

module.exports = AppDataSource;
