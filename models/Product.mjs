import { DataTypes } from "sequelize";
import sequelize from "./config/db.mjs";

const Product = sequelize.define("Product", {
  id: { type: DataTypes.INTEGER, 
  autoIncrement: true, 
  primaryKey: true },
  title: { type: DataTypes.STRING,
    allowNull: false },
  description: { type: DataTypes.TEXT,
     allowNull: false },
  price: { type: DataTypes.FLOAT,
     allowNull: false },
  stock: { type: DataTypes.INTEGER,
     allowNull: false, defaultValue: 0 },
  userId: { type: DataTypes.INTEGER,
     allowNull: false }
});

export default Product;