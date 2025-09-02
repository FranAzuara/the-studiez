import { Router } from "express";
import {
  getAvailability,
  updateAvailability,
} from "../controllers/calendar.js";
import { checkJwt } from "../middleware/session.js";

const router = Router();

router.get("/", getAvailability);
router.put("/", checkJwt, updateAvailability);

export default router;
