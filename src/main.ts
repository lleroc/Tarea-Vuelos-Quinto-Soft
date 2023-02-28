import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TodasExcepciones } from './common/filtros/http-exceptions.filter';
import { TiempoSalidaInterceptor } from './common/interceptores/tiemposalida.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new TodasExcepciones());
  app.useGlobalInterceptors(new TiempoSalidaInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const opcionesSwagger = new DocumentBuilder()
    .setTitle('Vuelos5to')
    .setDescription('usuario y pasageros de quinto')
    .setVersion('1.0.0')
    .build();

  const documento = SwaggerModule.createDocument(app, opcionesSwagger);
  SwaggerModule.setup('/api/docs', app, documento,{swaggerOptions:{filter:true}});

  await app.listen(3000);
}
bootstrap();
