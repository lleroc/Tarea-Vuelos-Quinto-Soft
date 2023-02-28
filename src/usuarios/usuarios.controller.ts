import { Body, Controller, Delete, GatewayTimeoutException, Get, Param, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuarioDTO } from './dto/usuario.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Usuarios")
@Controller('api/v1/usuarios')
export class UsuariosController {
    constructor(private readonly usuarioServicio:UsuariosService){}

    @Post()
    @ApiOperation({ summary:"Insertar Usuarios"})
    insertar(@Body() usuarioDTO:UsuarioDTO){
        console.log(usuarioDTO);
        return this.usuarioServicio.insertar(usuarioDTO);
    }

    @Get()
    @ApiOperation({ summary:"Todos los Usuarios"})
    todos(){
        return this.usuarioServicio.todos();
    }
    @Get(':id')
    @ApiOperation({ summary:"Un Usuario"})
    uno(@Param('id') id:string){
        return this.usuarioServicio.uno(id);
    }
    @Put(':id')
    @ApiOperation({ summary:"Actualizar Usuarios"})
    actualizar(@Param('id') id:string, @Body() usuarioDTO:UsuarioDTO){
        return this.usuarioServicio.actualizar(id, usuarioDTO);
    }

    @Delete(':id')
    @ApiOperation({ summary:"Eliminar un Usuario"})
    eliminar(@Param('id') id:string){
        return this.usuarioServicio.eliminar(id);
    }

}
