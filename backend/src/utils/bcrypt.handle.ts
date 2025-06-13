import { hash, compare } from "bcryptjs";

const encrypt = async (pass: string) => {
  const passwordHash = await hash(pass, 8);
  return passwordHash;
};
const verified = async (pass: string, passwordHash: string) => {
  const isValid = await compare(pass, passwordHash);
  return isValid;
};
export { encrypt, verified };
// Este archivo define las funciones para manejar el cifrado y verificación de contraseñas utilizando bcrypt.
