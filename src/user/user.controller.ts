import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() createUserDto) {
    return this.userService.createUser(createUserDto.email, createUserDto.password, createUserDto.name);
  }

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  async getProfile(@Body() userId) {
    return this.userService.findByEmail(userId);
  }
}
