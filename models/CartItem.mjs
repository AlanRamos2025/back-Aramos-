import { DataTypes } from "sequelize";
import sequelize from "../config/database.mjs";

const CartItem = sequelize.define("CartItem", {
  cantidad: { type: DataTypes.INTEGER, defaultValue: 1 }
});

export default CartItem;