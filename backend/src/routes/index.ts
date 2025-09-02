import { Router } from "express";
import authRouter from "./auth";
import calendarRouter from "./calendar";

const router = Router();

router.use("/auth", authRouter);
router.use("/calendar", calendarRouter);

export default router;
