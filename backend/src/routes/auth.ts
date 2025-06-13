import { Request, Response, Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";
const router = Router();

router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

export { router };
// Este archivo define las rutas para manejar la autenticación de usuarios en la aplicación.
// Importa las funciones del controlador de autenticación que manejan la lógica de negocio.
// Utiliza el enrutador de Express para definir las rutas y asociarlas con las funciones del controlador.
// Las rutas incluyen el registro de nuevos usuarios y el inicio de sesión de usuarios existentes.
