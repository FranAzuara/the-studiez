import EventModel from "../models/event.model";
import { Event } from "../Interfaces/event.interface";

const insertEvent = async (event: Event) => {
  const responseInsert = await EventModel.create(event);
  return responseInsert;
};

const obtenerEvents = async () => {
  const responseEvent = await EventModel.find({});
  return responseEvent;
};

const obtenerEvent = async (id: string) => {
  const responseEvent = await EventModel.findById(id);
  return responseEvent;
};

const updatEvent = async (id: string, event: Event) => {
  const responseUpdate = await EventModel.findByIdAndUpdate(id, event, {
    new: true,
  });
  return responseUpdate;
};

const deletEvent = async (id: string) => {
  const responseDelete = await EventModel.findByIdAndDelete(id);
  return responseDelete;
};

export { insertEvent, obtenerEvents, obtenerEvent, updatEvent, deletEvent };
// Este archivo contiene las funciones de servicio para manejar eventos en la base de datos.
// `insertEvent` inserta un nuevo evento en la base de datos.
// `obtenerEvents` obtiene todos los eventos almacenados en la base de datos.
// `obtenerEvent` obtiene un evento específico por su ID.
