import express from "express";
import cors from "cors";
import "dotenv/config";
import { router } from "./routes";
import db from "./config/mongo";
import serverless from "serverless-http";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/api", router);
db().then(() => console.log("Conectado a la base de datos"));
export const handler = serverless(app);
// Este archivo es el punto de entrada de la aplicación Express.
