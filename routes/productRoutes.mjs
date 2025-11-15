import express from "express";
import { auth } from "./middleware/auth.mjs";
import { getProducts, createProduct } from "./controllers/Product.mjs";

const router = express.Router();

router.get("/", getProducts);
router.post("/", auth, createProduct);

export default router;