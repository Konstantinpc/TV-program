const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Show",
  tableName: "shows",
  columns: {
    id: {
      primary: true,
      type: "integer",
      generated: true,
    },
    name: {
      type: "varchar",
      nullable: false,
    },
    duration: {
      type: "integer",
      nullable: false,
    },
    participants: {
      type: "simple-json",
      nullable: false,
    },
  },
});
