import { Request, Response, Router } from "express";
import {
  getEvent,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/event";
import { checkJwt } from "../middleware/session";
// Este archivo define las rutas para manejar eventos en la aplicación.
// Importa las funciones del controlador de eventos que manejan la lógica de negocio.
// Utiliza el enrutador de Express para definir las rutas y asociarlas con las funciones del controlador.
// Las rutas incluyen una autenticación JWT para las operaciones de creación, actualización y eliminación de eventos.

const router = Router();
router.get("/:id", getEvent);
router.get("/", getEvents);
router.post("/", checkJwt, createEvent);
router.put("/:id", checkJwt, updateEvent);
router.delete("/:id", checkJwt, deleteEvent);
export { router };
