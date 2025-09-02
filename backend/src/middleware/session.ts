import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle.js";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const JwtByUser = req.headers.authorization || "";
    const jwt = JwtByUser.split(" ").pop(); // Se extrae el JWT del encabezado de autorización.
    const isUser = verifyToken(`${jwt}`); // Se verifica la validez del JWT utilizando una función utilitaria.
    if (!isUser) {
      res.status(401);
      res.send("NOT_SESSION");
      return;
      // Si el JWT no es válido, se envía una respuesta de error 401 (no autorizado).
    } else {
      next();
      // Aquí se verifica si el JWT está presente en los encabezados de la solicitud.
      // Si está presente, se llama a `next()` para continuar con el siguiente middleware o controlador.
    }
  } catch (e) {
    res.status(400);
    res.send("NO_VALID_SESSION");
  }
};

export { checkJwt };
