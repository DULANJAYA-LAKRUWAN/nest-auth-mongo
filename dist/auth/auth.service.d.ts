import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from './dtos/user.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signUp(userDto: CreateUserDto): Promise<{
        message: string;
        user: import("mongoose").Document<unknown, {}, import("../user/user.schema").User> & import("../user/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    signIn(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
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
    getProfile(userId: string): Promise<import("mongoose").Document<unknown, {}, import("../user/user.schema").User> & import("../user/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
