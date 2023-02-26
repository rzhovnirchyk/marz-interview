import * as dotenv from "dotenv";
dotenv.config();

import express, { Express } from "express";
import productRoutes from "./routes/products.js";

export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV !== "test") {
  const PORT = parseInt(process.env.PORT, 10) ?? 3000;
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
