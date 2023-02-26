import { Model } from "objection";
import Knex from "knex";

const databaseName =
  process.env.NODE_ENV === "test"
    ? `${process.env.MYSQL_DATABASE}_test`
    : process.env.MYSQL_DATABASE;

// initialize knex
const knex = Knex({
  client: "mysql",
  connection: {
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT, 10),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: databaseName,
    multipleStatements: true,
  },
});

Model.knex(knex);

export default knex;
