import { Module } from '@nestjs/common';
import { PassajerosController } from './passajeros.controller';
import { PassajerosService } from './passajeros.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PASAGEROS } from '../common/models/models';
import { PasagerosSchema } from './schema/pasageros.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PASAGEROS.name,
        useFactory: () => PasagerosSchema,
      },
    ]),
  ],
  controllers: [PassajerosController],
  providers: [PassajerosService],
})
export class PassajerosModule {}
