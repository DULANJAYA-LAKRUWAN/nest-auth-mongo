import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { CreateUserDto, LoginUserDto } from '../users/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }

  @Post('signin')
  async signin(@Body() loginDto: LoginUserDto) {
    return this.authService.signin(loginDto);
  }

  @Post('signout')
  @UseGuards(JwtAuthGuard)
  signout(@Request() req) {
    // No-op for token-based signout
    return { message: 'Signed out successfully' };
  }
}
