import AvailabilityModel, { IAvailability } from "../models/calendar.model.js";
import {
  AvailabilityMap,
  DayAvailability,
} from "../Interfaces/calendar.interface.js";

// Función para crear un día completo con todas las horas en true
const createFullDayAvailability = (): DayAvailability => ({
  "8-00": true,
  "8-30": true,
  "9-00": true,
  "9-30": true,
  "10-00": true,
  "10-30": true,
  "11-00": true,
  "11-30": true,
  "12-00": true,
  "12-30": true,
  "13-00": true,
  "13-30": true,
  "14-00": true,
  "14-30": true,
  "15-00": true,
  "15-30": true,
  "16-00": true,
  "16-30": true,
  "17-00": true,
  "17-30": true,
  "18-00": true,
  "18-30": true,
  "19-00": true,
  "19-30": true,
  "20-00": true,
  "20-30": true,
  "21-00": true,
  "21-30": true,
  "22-00": true,
});

// Función para crear toda la semana con todas las horas en true
const createFullWeekAvailability = (): AvailabilityMap => ({
  Lunes: createFullDayAvailability(),
  Martes: createFullDayAvailability(),
  Miércoles: createFullDayAvailability(),
  Jueves: createFullDayAvailability(),
  Viernes: createFullDayAvailability(),
  Sábado: createFullDayAvailability(),
  Domingo: createFullDayAvailability(),
});

export const getAvailability = async (): Promise<IAvailability | null> => {
  let availability = await AvailabilityModel.findOne().exec();

  if (!availability) {
    // Si no existe, creamos uno nuevo con disponibilidad completa y lo guardamos
    const fullWeek = createFullWeekAvailability();
    availability = new AvailabilityModel(fullWeek);
    await availability.save();
  }

  return availability;
};

export const updateAvailability = async (
  slots: AvailabilityMap
): Promise<IAvailability | null> => {
  const updated = await AvailabilityModel.findOneAndUpdate({}, slots, {
    new: true,
    upsert: true,
  }).exec();
  return updated;
};
