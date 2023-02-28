import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class PasagerosDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
