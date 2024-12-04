import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  birthday: string;

  @IsNotEmpty()
  birthTime: string;

  @IsNotEmpty()
  contactNumber: string;
}
