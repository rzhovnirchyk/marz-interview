import express, { Request, Response, Router } from "express";
import Product from "../db/product.model.js";

const router: Router = express.Router();

const PRODUCT_STATUSES = new Set(["Active", "InActive"]);

router.get("/", async (req: Request, res: Response) => {
  try {
    let products: Product[] = [];
    const productStatus = req.query.ProductStatus?.toString();
    if (productStatus && PRODUCT_STATUSES.has(productStatus)) {
      products = await Product.query().where("ProductStatus", productStatus);
    } else {
      products = await Product.query();
    }
    res.json({
      data: products,
      message: "",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      data: [],
      message: "There was an error retrieving the products.",
    });
  }
});

export default router;
