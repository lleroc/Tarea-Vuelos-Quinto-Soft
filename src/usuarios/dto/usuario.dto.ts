import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UsuarioDTO{
    @IsNotEmpty()
    @IsString()
   readonly nombre: string;
   @IsNotEmpty()
   @IsString()
   readonly usuario:string;
   @IsNotEmpty()
   @IsEmail()
   readonly email:string;
   @IsNotEmpty()
   @IsString()
   readonly password:string;
}