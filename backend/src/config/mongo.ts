import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
  const DB_URI = <string>process.env.DB_URI;
  try {
    await connect(DB_URI);
    console.log("Conectado a MongoDB Atlas");
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
    throw err; // Para que Vercel detecte que algo falló
  }
}

export default dbConnect;
// Este archivo se encarga de conectar la aplicación a la base de datos MongoDB utilizando Mongoose.
// La conexión se realiza utilizando la URI de la base de datos definida en las variables de entorno.
// La función `dbConnect` es exportada para ser utilizada en otros módulos de la aplicación.
// Se utiliza `async/await` para manejar la conexión de manera asíncrona.
// Si la conexión falla, Mongoose lanzará un error que puede ser manejado en el lugar donde se llame a `dbConnect`.
