import express from "express";
import cors from "cors";
import { router } from "./routes";
import dbConnect from "./config/mongo";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: ["https://the-studiez.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

// Root route handler
app.get("/", (_req, res) => {
  res.json({
    status: "online",
    message: "The Studiez API",
    endpoints: {
      calendar: "/api/calendar",
      auth: "/api/auth",
    },
  });
});

app.use("/api", router);

// Initialize database and start server
if (process.env.NODE_ENV !== "production") {
  dbConnect()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
        console.log("📦 Database connected");
      });
    })
    .catch((error) => {
      console.error("❌ Failed to start server:", error);
      process.exit(1);
    });
}

export default app;
// Este archivo es el punto de entrada de la aplicación.
