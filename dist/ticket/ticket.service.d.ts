import { Model } from 'mongoose';
import { Ticket } from './ticket.schema';
export declare class TicketService {
    private readonly ticketModel;
    constructor(ticketModel: Model<Ticket>);
    getAllTickets(): Promise<Ticket[]>;
}
