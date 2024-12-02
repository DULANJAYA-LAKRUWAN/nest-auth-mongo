import { Controller, Post, Body, UseGuards, Request, Headers } from '@nestjs/common';
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
  signout(@Headers('authorization') authHeader: string) {
    const token = authHeader?.split(' ')[1];
    if (token) {
      return this.authService.signout(token);
    }
    return { message: 'Invalid token' };
  }
}
