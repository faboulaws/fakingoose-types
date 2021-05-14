import { Document } from "mongoose";

export interface Client {
  name: string;
  age: number;
}

export interface ClientDoc extends Client, Document {}
