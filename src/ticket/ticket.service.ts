import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticket } from './ticket.schema';

@Injectable()
export class TicketService {
  constructor(@InjectModel('Ticket') private readonly ticketModel: Model<Ticket>) {}

  async getAllTickets(): Promise<Ticket[]> {
    return this.ticketModel.find().exec();
  }
}
