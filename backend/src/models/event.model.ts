import {} from "mongoose";
import { Schema, Types, model, Model } from "mongoose";
import { Event } from "../Interfaces/event.interface";

const EventSchema = new Schema<Event>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    style: {
      type: String,
      required: false,
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const EventModel: Model<Event> = model<Event>("Event", EventSchema);
export default EventModel;
// Este archivo define el modelo de datos para los eventos utilizando Mongoose.
// El modelo `Event` incluye campos como `title`, `description`, `style`, `start`, `end`, `location`, `date` y `teacher`.
