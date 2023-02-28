import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { PassajerosService } from './passajeros.service';
import { PasagerosDTO } from './dto/pasageros.dto';

@Controller('passajeros')
export class PassajerosController {
    constructor(private readonly pasageroServicio:PassajerosService){}

    @Post()
    insertar(@Body() pasageroDTO:PasagerosDTO){   
        return this.pasageroServicio.insertar(pasageroDTO);
    }
    @Get()
    todos(){
        return this.pasageroServicio.todos();
    }
    @Get(':id')
    uno(@Param('id') id:string){
        return this.pasageroServicio.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id:string, @Body() pasageroDTO:PasagerosDTO){
        return this.pasageroServicio.actualizar(id, pasageroDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.pasageroServicio.eliminar(id);
    }
}
