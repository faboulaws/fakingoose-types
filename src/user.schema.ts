import { Schema } from "mongoose";

export const userSchema = new Schema({
  name: String,
  age: Number
});
