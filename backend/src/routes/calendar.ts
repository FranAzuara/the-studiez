import { Router } from "express";
import { getAvailability, updateAvailability } from "../controllers/calendar";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/", getAvailability);
router.put("/", checkJwt, updateAvailability);

export default router;
