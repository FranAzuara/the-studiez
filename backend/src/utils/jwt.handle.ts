import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// Genera un token JWT con el ID de usuario y la clave secreta
const generateToken = (id: string) => {
  return jwt.sign({ id }, JWT_SECRET as string, {
    expiresIn: "1h",
  });
};

// Verifica un token JWT usando la clave secreta
const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET as string);
};

export { generateToken, verifyToken };
// Este archivo contiene funciones para generar y verificar tokens JWT.
