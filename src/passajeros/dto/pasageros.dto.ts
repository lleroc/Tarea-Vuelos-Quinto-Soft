import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class PasagerosDTO {
  @IsNotEmpty()
  @IsString()
  nombre: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
