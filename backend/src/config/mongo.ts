import "dotenv/config";
import mongoose from "mongoose";

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;

  if (!process.env.DB_URI) throw new Error("DB_URI no definida");

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.DB_URI).then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;

// Este archivo configura la conexión a la base de datos MongoDB utilizando Mongoose.
// Utiliza una variable global para almacenar la conexión y evitar múltiples conexiones en entornos serverless.
// La función dbConnect maneja la lógica de conexión y se asegura de que solo haya una conexión activa.
// Exporta la función dbConnect para que pueda ser utilizada en otras partes de la aplicación.
