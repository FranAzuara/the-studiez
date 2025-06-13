import { Schema, Types, model, Model } from "mongoose";
import { User } from "../Interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const UserModel: Model<User> = model<User>("User", UserSchema);
export default UserModel;
// Este archivo define el modelo de datos para los eventos utilizando Mongoose.
// El modelo `Event` incluye campos como `title`, `description`, `style`, `start`, `end`, `location`, `date` y `teacher`.
