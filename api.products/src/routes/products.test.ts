import request from "supertest";
import fs from "fs";
import path from "path";
import knex from "../db/database";
import { app } from "../index";

describe("products", () => {
  beforeAll(async () => {
    try {
      const sqlSchema = fs
        .readFileSync(path.join(process.cwd(), "/../db/schema.sql"))
        .toString();
      const sqlData = fs
        .readFileSync(path.join(process.cwd(), "/../db/data.sql"))
        .toString();
      await knex.raw(sqlSchema);
      await knex.raw(sqlData);
    } catch (error) {
      console.log(error);
    }
  });

  afterAll(async () => {
    await knex.destroy();
  });

  describe("GET /api/products/", () => {
    it("should return products", async () => {
      const { body } = await request(app).get(`/api/products/`).expect(200);

      expect(body.data).toHaveLength(5);
    });

    it("should return only active products", async () => {
      const { body } = await request(app)
        .get(`/api/products/?ProductStatus=Active`)
        .expect(200);

      expect(body.data).toHaveLength(3);
      expect(
        body.data.every((product) => product.ProductStatus === "Active")
      ).toBe(true);
    });

    it("should return only inactive products", async () => {
      const { body } = await request(app)
        .get(`/api/products/?ProductStatus=InActive`)
        .expect(200);

      expect(body.data).toHaveLength(2);
      expect(
        body.data.every((product) => product.ProductStatus === "InActive")
      ).toBe(true);
    });

    it("should return no products", async () => {
      await knex.schema.dropTableIfExists("Orders");
      await knex("Product").truncate();
      const { body } = await request(app).get(`/api/products/`).expect(200);
      expect(body.data).toHaveLength(0);
    });

    it("should return error", async () => {
      await knex.schema.dropTableIfExists("Orders");
      await knex.schema.dropTableIfExists("Product");

      const res = await request(app).get(`/api/products/`).expect(500);

      const { message } = res.body;
      expect(message).not.toBe("");
    });
  });
});
