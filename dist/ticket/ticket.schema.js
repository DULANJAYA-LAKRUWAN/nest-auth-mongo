"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TicketSchema = new mongoose_1.Schema({
    id: String,
    number: String,
    date: String,
    soldOut: Boolean,
    digits: [Number],
});
//# sourceMappingURL=ticket.schema.js.map