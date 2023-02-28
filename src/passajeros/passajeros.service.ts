import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PASAGEROS } from '../common/models/models';
import { IPasagero } from '../common/Interfaces/pasageros.interface';
import { PasagerosDTO } from './dto/pasageros.dto';

@Injectable()
export class PassajerosService {
    constructor(
        @InjectModel(PASAGEROS.name) private readonly modelo: Model<IPasagero>,
      ) {}
      async insertar(pasageroDTO: PasagerosDTO): Promise<IPasagero> {
       const nuevoPasagero = new this.modelo(pasageroDTO)
        return nuevoPasagero.save();
      }
      async todos(): Promise<IPasagero[]> {
        return await this.modelo.find();
      }
      async uno(id: string): Promise<IPasagero> {
        return await this.modelo.findById(id);
      }
      async actualizar(id: string, pasageroDTO: PasagerosDTO): Promise<IPasagero> {
       
        return await this.modelo.findByIdAndUpdate(id, pasageroDTO, { new: true });
      }
    
      async eliminar(id: string) {
        await this.modelo.findByIdAndDelete(id);
        return { status: HttpStatus.OK, msg: 'Esta eliminado y no pasaste el nivel' };
      }
}
