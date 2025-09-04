import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./src/routes";
import db from "./src/config/mongo";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/api", router);
db().then(() => console.log("Conectado a la base de datos"));
app.listen(PORT, () => {
  console.log(`Listo por el port ${PORT}`);
});
// Este archivo es el punto de entrada de la aplicación
