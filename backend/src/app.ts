import express from "express";
import cors from "cors";
import { router } from "./routes";
import dbConnect from "./config/mongo";

const app = express();
const PORT = process.env.PORT || 3001;
const FRONTEND_PORT = process.env.FRONTEND_PORT || 8080;

app.use(
  cors({
    origin: [
      `http://localhost:${FRONTEND_PORT}`, // frontend local
      "https://the-studiez.vercel.app", // frontend en producción
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use(express.json());

// Root route handler
app.get("/", (_req, res) => {
  res.json({
    status: "online",
    message: "The Studiez API",
    endpoints: {
      calendar: "/calendar",
      auth: "/auth",
    },
  });
});

app.use("/", router);

// Initialize database and start server
dbConnect()
  .then(() => {
    console.log("📦 Database connected");

    // Solo escuchar en local (no en Vercel)
    if (process.env.NODE_ENV !== "production") {
      app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
      });
    }
  })
  .catch((error) => {
    console.error("❌ Failed to connect to database:", error);
  });

export default app;
// Este archivo es el punto de entrada de la aplicación.
