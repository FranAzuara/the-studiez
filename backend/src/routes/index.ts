import { Router } from "express";
import { router as authRouter } from "./auth";
import { router as calendarRouter } from "./calendar";

const router = Router();

//rutas de manera estática
router.use("/auth", authRouter);
router.use("/calendar", calendarRouter);

export { router };
