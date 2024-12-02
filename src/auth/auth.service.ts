import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../users/user.service';
import { LoginUserDto, CreateUserDto } from '../users/user.dto';

@Injectable()
export class AuthService {
  private readonly invalidatedTokens: Set<string> = new Set();

  constructor(private userService: UserService, private jwtService: JwtService) {}

  async signup(userData: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    return this.userService.createUser({ ...userData, password: hashedPassword });
  }

  async signin(loginDto: LoginUserDto) {
    const user = await this.userService.findByEmail(loginDto.email);
    if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  signout(token: string) {
    this.invalidatedTokens.add(token);
    return { message: 'Signed out successfully' };
  }

  isTokenInvalidated(token: string): boolean {
    return this.invalidatedTokens.has(token);
  }
}
