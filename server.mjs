import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db.mjs";

import authRoutes from "./routes/authRoutes.mjs";
import productRoutes from "./routes/productRoutes.mjs";

dotenv.config(); //Esto protege datos importantes y evita hardcodearlos en el código a la hora de usar las variables de entorno como el .env

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);//asignar ruta de autenticacion
app.use("/api/products", productRoutes);//asignar ruta de autenticacion

sequelize.sync().then(() => {
  console.log("DB sincronizada");
  app.listen(4000, () => console.log("Servidor en puerto 4000"));
});