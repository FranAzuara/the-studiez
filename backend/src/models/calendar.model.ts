import {} from "mongoose";
import { Schema, Types, model, Model } from "mongoose";
import {
  DayAvailability,
  AvailabilityMap,
} from "../Interfaces/calendar.interface.js";

const dayAvailabilitySchema = new Schema<DayAvailability>({
  "8-00": { type: Boolean, required: true },
  "8-30": { type: Boolean, required: true },
  "9-00": { type: Boolean, required: true },
  "9-30": { type: Boolean, required: true },
  "10-00": { type: Boolean, required: true },
  "10-30": { type: Boolean, required: true },
  "11-00": { type: Boolean, required: true },
  "11-30": { type: Boolean, required: true },
  "12-00": { type: Boolean, required: true },
  "12-30": { type: Boolean, required: true },
  "13-00": { type: Boolean, required: true },
  "13-30": { type: Boolean, required: true },
  "14-00": { type: Boolean, required: true },
  "14-30": { type: Boolean, required: true },
  "15-00": { type: Boolean, required: true },
  "15-30": { type: Boolean, required: true },
  "16-00": { type: Boolean, required: true },
  "16-30": { type: Boolean, required: true },
  "17-00": { type: Boolean, required: true },
  "17-30": { type: Boolean, required: true },
  "18-00": { type: Boolean, required: true },
  "18-30": { type: Boolean, required: true },
  "19-00": { type: Boolean, required: true },
  "19-30": { type: Boolean, required: true },
  "20-00": { type: Boolean, required: true },
  "20-30": { type: Boolean, required: true },
  "21-00": { type: Boolean, required: true },
  "21-30": { type: Boolean, required: true },
  "22-00": { type: Boolean, required: true },
});

const availabilitySchema = new Schema<AvailabilityMap>({
  Lunes: { type: dayAvailabilitySchema, required: true },
  Martes: { type: dayAvailabilitySchema, required: true },
  Miércoles: { type: dayAvailabilitySchema, required: true },
  Jueves: { type: dayAvailabilitySchema, required: true },
  Viernes: { type: dayAvailabilitySchema, required: true },
  Sábado: { type: dayAvailabilitySchema, required: true },
  Domingo: { type: dayAvailabilitySchema, required: true },
});

export interface IAvailability extends Document {
  Lunes: Record<string, boolean>;
  Martes: Record<string, boolean>;
  Miércoles: Record<string, boolean>;
  Jueves: Record<string, boolean>;
  Viernes: Record<string, boolean>;
  Sábado: Record<string, boolean>;
  Domingo: Record<string, boolean>;
}

const AvailabilityModel: Model<IAvailability> = model<IAvailability>(
  "Availability",
  availabilitySchema
);
export default AvailabilityModel;
