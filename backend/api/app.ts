import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "../src/routes/index.js";
import dbConnect from "../src/config/mongo.js";
import serverless from "serverless-http";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api", router);

// Conexión a MongoDB con try/catch
(async () => {
  try {
    await dbConnect();
    console.log("Conectado a la base de datos");
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
  }
})();

// Exporta el handler para Vercel serverless
export const handler = serverless(app);
