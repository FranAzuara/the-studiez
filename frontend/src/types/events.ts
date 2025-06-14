import { type DanceName } from "./danceStyles";
export type EventType = {
  title: string;
  description?: string;
  style?: DanceName; // Optional, if the event is related to a specific dance style
  start: string; // ISO date string
  end: string; // ISO date string
  location: string;
  date: string; // ISO date string
  teacher: string;
  _id?: string; // Optional, for MongoDB ObjectId
};
