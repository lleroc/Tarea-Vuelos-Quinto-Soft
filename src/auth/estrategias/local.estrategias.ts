import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalEstrategia extends PassportStrategy(Strategy){
    constructor(private readonly authServicio:AuthService){
        super();
    }

    async validar (nombreusuario:string, password:string):Promise<any>{
        const usuario = await this.authServicio.validarusaurio(nombreusuario,password);

        if(!usuario) throw new UnauthorizedException();

        return usuario;
    }
}