import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET as string, {
    expiresIn: "1h",
  });
  // El token JWT se genera con un ID de usuario y una clave secreta, con una validez de 1 hora.
  // El token se firma utilizando la clave secreta definida en las variables de entorno.
  return jwt;
};
const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET as string);
  // Verifica la validez del token JWT utilizando la clave secreta.
  // Si el token es válido, devuelve el contenido del token; de lo contrario, lanza un error.
  return isOk;
};

export { generateToken, verifyToken };
// Este archivo define funciones para generar y verificar tokens JWT.
