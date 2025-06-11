import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
  res.status(500);
  res.send({ error });
};

export { handleHttp };
// Este archivo define una función para manejar errores en las respuestas de Express.
// La función `handleHttp` toma una respuesta de Express, un mensaje de error y opcionalmente un error crudo.
