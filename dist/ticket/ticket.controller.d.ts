import { TicketService } from './ticket.service';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    getTickets(): Promise<import("./ticket.schema").Ticket[]>;
}
