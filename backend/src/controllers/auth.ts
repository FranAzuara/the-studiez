import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
  // Aquí se maneja el registro de un nuevo usuario.
  // Se espera que el cuerpo de la solicitud contenga los datos del usuario.
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  // Aquí se maneja el inicio de sesión de un usuario.
  const responseUser = await loginUser({ email, password });
  // Se espera que el cuerpo de la solicitud contenga el correo electrónico y la contraseña del usuario.

  if (
    responseUser === "Incorrect credentials" ||
    responseUser === "Incorrect password"
  ) {
    res.status(403).send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { registerCtrl, loginCtrl };
