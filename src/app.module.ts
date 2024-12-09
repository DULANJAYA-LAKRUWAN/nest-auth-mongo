import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load environment variables
    MongooseModule.forRoot(process.env.MONGO_URI), // MongoDB connection
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}