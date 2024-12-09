import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
<<<<<<< HEAD
import { UserModule } from './users/user.module';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();
=======
import { UserModule } from './user/user.module';
>>>>>>> 3e7ea839f6b3de4734f31df8b1de983925b22e72

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load environment variables
    MongooseModule.forRoot(process.env.mongo_uri), // MongoDB connection using correct variable
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
