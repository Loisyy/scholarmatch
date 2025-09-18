import { IsEmail, IsString, IsOptional, IsArray } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsArray()
  @IsOptional()
  interests: string[];

  @IsString()
  confirmPassword: string;
}
