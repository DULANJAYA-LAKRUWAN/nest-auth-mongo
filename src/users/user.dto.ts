import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, IsDateString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 20)
  password: string;

  @IsNotEmpty()
  @IsDateString()
  birthday: string;

  @IsNotEmpty()
  @IsString()
  birthTime: string;

  @IsOptional()
  @IsString()
  contactNumber?: string;
}

export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 20)
  password: string;
}
