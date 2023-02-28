import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy} from 'passport-jwt';

@Injectable()
export class JwtEstrategia extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey: process.env.JWT_SECRET
        });
    }
    async validar(payload:any){
        return {usuarioid:payload.sub, usuario:payload.username }
    }
}