import { Request, Response, Router } from "express";
import {
  getEvent,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/event";
// Este archivo define las rutas para manejar eventos en la aplicación.
// Importa las funciones del controlador de eventos que manejan la lógica de negocio.
// Utiliza el enrutador de Express para definir las rutas y asociarlas con las funciones del controlador.

const router = Router();
router.get("/:id", getEvent);
router.get("/", getEvents);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
export { router };
