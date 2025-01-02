import { Schema, Document } from 'mongoose';

export const TicketSchema = new Schema({
  id: String,
  number: String,
  date: String,
  soldOut: Boolean,
  digits: [Number],
});

export interface Ticket extends Document {
  id: string;
  number: string;
  date: string;
  soldOut: boolean;
  digits: number[];
}
