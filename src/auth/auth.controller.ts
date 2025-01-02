import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Request,
  Res,
  HttpCode,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Response } from 'express';
import { CreateUserDto, LoginUserDto } from './dtos/user.dto';
import { BlacklistService } from '../shared/blacklist.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,private readonly blacklistService: BlacklistService,) {}

  @Post('signup')
  async signUp(@Body() body: CreateUserDto) {
    return this.authService.signUp(body);
  }

  @Post('signin')
  @HttpCode(200)
  async signIn(
    @Body() body: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const tokens = await this.authService.signIn(body.email, body.password);

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return {
      accessToken: tokens.accessToken,
      user: tokens.user,
    };
  }

  @Post('logout')
  @HttpCode(200)
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('refreshToken');
    return { message: 'Logged out successfully' };
  }


  @Get('profile')
  @UseGuards(JwtAuthGuard) // Protect this route with JwtAuthGuard
  async getProfile(@Request() req) {
    const userId = req.user.userId; // Extract user ID from JWT payload
    const user = await this.authService.getProfile(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      userId: user._id,
      userName: user.userName,
      email: user.email,
      birthday: user.birthday,
      birthTime: user.birthTime,
      contactNumber: user.contactNumber,
    };
  }
}
