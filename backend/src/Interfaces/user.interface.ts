import { Auth } from "./auth.interface.js";

export interface User extends Auth {
  name: string;
}
