import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UsuarioDTO{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
   readonly nombre: string;
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   readonly usuario:string;
   @ApiProperty()
   @IsNotEmpty()
   @IsEmail()
   readonly email:string;
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   readonly password:string;
}