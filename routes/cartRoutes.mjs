import express from "express";
import { auth } from "../middleware/auth.mjs";
import Cart from "../models/Cart.mjs";
import CartItem from "../models/CartItem.mjs";
import Product from "../models/Product.mjs";

const router = express.Router();

router.post("/add", auth, async (req, res) => {
  const { productId } = req.body;

  let cart = await Cart.findOne({ where: { UserId: req.user.id } });
  if (!cart) cart = await Cart.create({ UserId: req.user.id });

  const item = await CartItem.findOne({
    where: { CartId: cart.id, ProductId: productId }
  });

  if (item) {
    await item.update({ cantidad: item.cantidad + 1 });
    return res.json("Cantidad actualizada");
  }

  await CartItem.create({ CartId: cart.id, ProductId: productId });
  res.json("Producto agregado al carrito");
});

router.get("/", auth, async (req, res) => {
  const cart = await Cart.findOne({
    where: { UserId: req.user.id },
    include: {
      model: Product,
      through: { attributes: ["cantidad"] }
    }
  });

  res.json(cart || {});
});

router.post("/confirm", auth, async (req, res) => {
  const cart = await Cart.findOne({ where: { UserId: req.user.id } });

  if (!cart) return res.status(400).json("Carrito vacío");

  await CartItem.destroy({ where: { CartId: cart.id } });

  res.json("Compra confirmada");
});

export default router;
