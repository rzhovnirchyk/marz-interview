import { Model } from "objection";
import knex from "./database.js";

class Product extends Model {
  static get tableName() {
    return "Product";
  }
}

Model.knex(knex);

export default Product;
