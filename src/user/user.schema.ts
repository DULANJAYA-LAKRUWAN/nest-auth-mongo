import { Schema, Document } from 'mongoose';

export interface User extends Document {
  email: string;
  password: string;
  name: string;
}

export const UserSchema = new Schema({
  email: { type: String, unique: true },
  password: { type: String },
  name: { type: String },
});
