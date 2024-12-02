import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string; // User Name

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, type: String })
  birthday: string; // Storing as a string in ISO format

  @Prop({ required: true })
  birthTime: string;

  @Prop()
  contactNumber?: string; // Optional field
}

export const UserSchema = SchemaFactory.createForClass(User);
