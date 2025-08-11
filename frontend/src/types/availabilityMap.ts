import { type Day } from "../types/calendarDay";

export type AvailabilityMap = {
  [day in Day]: { [hour: `${number}-00` | `${number}-30`]: boolean };
};
