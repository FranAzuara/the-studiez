import { Request, Response } from "express";
import * as availabilityService from "../services/calendar";

const getAvailability = async (req: Request, res: Response): Promise<void> => {
  try {
    const availability = await availabilityService.getAvailability();
    res.json(availability);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener la disponibilidad" });
  }
};

const updateAvailability = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const slots = req.body;
    if (!slots) {
      res.status(400).json({ message: "Faltan datos de disponibilidad" });
      return; // Salir sin devolver nada
    }
    const updated = await availabilityService.updateAvailability(slots);
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar la disponibilidad" });
  }
};

export { getAvailability, updateAvailability };
