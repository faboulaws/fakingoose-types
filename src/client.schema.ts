import { Model, Schema } from "mongoose";
import { ClientDoc } from "./client";

export const clientSchema = new Schema<ClientDoc, Model<ClientDoc>>({
  name: String,
  age: Number
});
