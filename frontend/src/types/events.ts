export type EventType = {
  title: string;
  description?: string;
  style?: string;
  start: string; // ISO date string
  end: string; // ISO date string
  location: string;
  date: string; // ISO date string
  teacher: string;
  _id?: string; // Optional, for MongoDB ObjectId
};
