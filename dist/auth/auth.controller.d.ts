import { AuthService } from './auth.service';
import { Response } from 'express';
import { CreateUserDto, LoginUserDto } from './dtos/user.dto';
import { BlacklistService } from '../shared/blacklist.service';
export declare class AuthController {
    private readonly authService;
    private readonly blacklistService;
    constructor(authService: AuthService, blacklistService: BlacklistService);
    signUp(body: CreateUserDto): Promise<{
        message: string;
        user: import("mongoose").Document<unknown, {}, import("../user/user.schema").User> & import("../user/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    signIn(body: LoginUserDto, res: Response): Promise<{
        accessToken: string;
        user: {
            userName: string;
            email: string;
            birthday: string;
            birthTime: string;
            contactNumber?: string;
            _id: unknown;
            $locals: Record<string, unknown>;
            $op: "save" | "validate" | "remove" | null;
            $where: Record<string, unknown>;
            baseModelName?: string;
            collection: import("mongoose").Collection;
            db: import("mongoose").Connection;
            errors?: import("mongoose").Error.ValidationError;
            id?: any;
            isNew: boolean;
            schema: import("mongoose").Schema;
        };
    }>;
    logout(res: Response): Promise<{
        message: string;
    }>;
    getProfile(req: any): Promise<{
        userId: unknown;
        userName: string;
        email: string;
        birthday: string;
        birthTime: string;
        contactNumber: string;
    }>;
}
