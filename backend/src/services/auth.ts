import { Auth } from "../Interfaces/auth.interface.js";
import { User } from "../Interfaces/user.interface.js";
import UserModel from "../models/auth.model";
import { encrypt, verified } from "../utils/bcrypt.handle.js";
import { generateToken } from "../utils/jwt.handle.js";

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "User already exists";
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });
  return registerNewUser;
};
const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "Incorrect credentials";
  // Si el usuario no existe, devuelve un mensaje de error

  const passwordHash = checkIs.password; //encriptado
  const isCorrect = await verified(password, passwordHash);
  // Verifica si la contraseña proporcionada coincide con la almacenada

  if (!isCorrect) return "Incorrect password";
  const token = generateToken(checkIs.email);
  const data = {
    token,
    user: checkIs,
  };
  // Si la contraseña es correcta, genera un token JWT
  // Si la contraseña no coincide, devuelve un mensaje de error
  return data;
};
export { registerNewUser, loginUser };
// Este archivo define las funciones para manejar la autenticación de usuarios en la aplicación.
