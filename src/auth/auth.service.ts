import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from './dtos/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(userDto: CreateUserDto) {
    const { password, ...rest } = userDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    const userExists = await this.userService.findByEmail(userDto.email);
    if (userExists) {
      throw new UnauthorizedException('Email already exists');
    }

    const user = await this.userService.create({
      ...rest,
      password: hashedPassword,
    });
    return { message: 'User successfully created', user };
  }

  async signIn(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = this.jwtService.sign(
      { sub: user._id, email: user.email },
      {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRE_TIME,
      },
    );

    const refreshToken = this.jwtService.sign(
      { sub: user._id },
      {
        secret: process.env.REFRESH_TOKEN_SECRET,
        expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
      },
    );

    const { password: _, ...userWithoutPassword } = user.toObject();

    return {
      accessToken,
      refreshToken,
      user: userWithoutPassword,
    };
  }

  async getProfile(userId: string) {
    const user = await this.userService.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
