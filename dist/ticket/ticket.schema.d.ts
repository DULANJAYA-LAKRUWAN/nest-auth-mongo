import { Schema, Document } from 'mongoose';
export declare const TicketSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    digits: number[];
    number?: string;
    date?: string;
    id?: string;
    soldOut?: boolean;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    digits: number[];
    number?: string;
    date?: string;
    id?: string;
    soldOut?: boolean;
}>> & import("mongoose").FlatRecord<{
    digits: number[];
    number?: string;
    date?: string;
    id?: string;
    soldOut?: boolean;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export interface Ticket extends Document {
    id: string;
    number: string;
    date: string;
    soldOut: boolean;
    digits: number[];
}
