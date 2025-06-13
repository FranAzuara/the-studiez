import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  insertEvent,
  obtenerEvents,
  obtenerEvent,
  updatEvent,
  deletEvent,
} from "../services/event";

const getEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resp = await obtenerEvent(id);
    const data = resp ? resp : "EVENT_NOT_FOUND";
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_EVENT");
  }
};

const getEvents = async (req: Request, res: Response) => {
  try {
    const resp = await obtenerEvents();
    const data = resp.length > 0 ? resp : "EVENTS_NOT_FOUND";
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_EVENTS", error);
  }
};

const createEvent = async ({ body }: Request, res: Response) => {
  try {
    const resp = await insertEvent(body);
    const data = resp ? resp : "ERROR_CREATING_EVENT";
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_CREATE_EVENT");
  }
};

const updateEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const resp = await updatEvent(id, body);
    const data = resp ? resp : "EVENT_NOT_FOUND";
    res.send(resp);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_EVENT");
  }
};

const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resp = await deletEvent(id);
    const data = resp ? resp : "EVENT_NOT_FOUND";
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_EVENT");
  }
};

export { getEvent, getEvents, createEvent, updateEvent, deleteEvent };
