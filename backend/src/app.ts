import express from "express";
import cors from "cors";
import "dotenv/config";
import { router } from "./routes";
import db from "./config/mongo";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? ["http://the-studiez-backend.vercel.app"]
        : ["http://localhost:3001"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "The Studiez API is running",
    endpoints: {
      calendar: "/api/calendar",
      auth: "/api/auth",
    },
  });
});

app.use("/api", router);
db().then(() => console.log("Conectado a la base de datos"));
app.listen(PORT, () => {
  console.log(`Listo por el port ${PORT}`);
});

export default app;
// Este archivo es el punto de entrada de la aplicación.
