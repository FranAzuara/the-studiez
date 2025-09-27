import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTES = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

// Add error handling
try {
  readdirSync(PATH_ROUTES).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index") {
      import(`./${cleanName}`)
        .then((moduleRouter) => {
          router.use(`/${cleanName}`, moduleRouter.router);
          console.log(`Route /${cleanName} loaded successfully`);
        })
        .catch((err) => {
          console.error(`Error loading route ${cleanName}:`, err);
        });
    }
  });
} catch (err) {
  console.error("Error loading routes:", err);
}

export { router };
// Este archivo es un CARGADOR DE RUTAS para Express que importa dinámicamente otros módulos de rutas.
// Utiliza `readdirSync` para leer el directorio actual y filtra los archivos, excluyendo el archivo `index`.
// Luego, importa cada módulo de ruta y lo añade al router principal de Express.

// Este código inicializa un router de Express y lee todos los archivos en el directorio actual,
// excluyendo el archivo index. Imprime en la consola los nombres de los otros archivos.
// La función `cleanFileName` se usa para eliminar la extensión del archivo (.ts) de los nombres.
// El router puede usarse para definir rutas para la aplicación.
