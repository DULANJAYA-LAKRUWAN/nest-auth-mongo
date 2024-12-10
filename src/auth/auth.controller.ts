import { Controller, Post, Body, UseGuards, Get, Request, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() body) {
    return this.authService.signUp(body);
  }

  @Post('signin')
  async signIn(@Body() body, @Res() res: Response) {
    const { email, password } = body;
    const tokens = await this.authService.signIn(email, password);

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });

    return res.send({ accessToken: tokens.accessToken });
  }

  @Post('refresh')
  async refresh(@Body('refreshToken') refreshToken: string) {
    return this.authService.refreshTokens(refreshToken);
  }

  @Post('logout')
  async logout(@Res() res: Response) {
    res.clearCookie('refreshToken');
    return { message: 'Logged out successfully' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
