import { Strategy } from 'passport-jwt';
import { Request } from 'express';
import { UserService } from '../user/user.service';
declare const RefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(req: Request, payload: any): Promise<{
        userId: any;
        refreshToken: any;
    }>;
}
export {};
