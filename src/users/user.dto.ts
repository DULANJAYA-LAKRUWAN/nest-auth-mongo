import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, IsDateString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string; // User Name

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 20)
  password: string;

  @IsNotEmpty()
  @IsDateString()
  birthday: string; // ISO date string (YYYY-MM-DD)

  @IsNotEmpty()
  @IsString()
  birthTime: string; // Time in string format

  @IsOptional()
  @IsString()
  contactNumber?: string; // Optional field
}

export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 20)
  password: string;
}
