import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    const token = ExtractJwt.fromAuthHeaderAsBearerToken()(payload);
    if (this.authService.isTokenInvalidated(token)) {
      throw new UnauthorizedException('Token has been invalidated');
    }
    return { userId: payload.sub, email: payload.email };
  }
}
