import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CreateEmpleoService,
  DeleteEmpleoService,
  GetEmpleoByIdService,
  ListEmpleosService,
  UpdateEmpleoService,
} from '../application/empleos/services';
import {
  ICreateEmpleoUseCase,
  IDeleteEmpleoUseCase,
  IGetEmpleoByIdUseCase,
  IListEmpleosUseCase,
  IUpdateEmpleoUseCase,
} from '../application/empleos/ports/in/empleo.use-cases';
import { EmpleoRepository } from '../domain/empleos/empleo.repository';
import { EmpleosController } from '../infrastructure/entrypoints/empleos/empleos.controller';
import { EmpleoOrmEntity } from '../infrastructure/persistence/typeorm/entities/empleo.orm-entity';
import { EmpleoTypeOrmRepository } from '../infrastructure/persistence/typeorm/repositories/empleo-typeorm.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EmpleoOrmEntity])],
  controllers: [EmpleosController],
  providers: [
    { provide: EmpleoRepository, useClass: EmpleoTypeOrmRepository },
    { provide: ICreateEmpleoUseCase, useClass: CreateEmpleoService },
    { provide: IUpdateEmpleoUseCase, useClass: UpdateEmpleoService },
    { provide: IDeleteEmpleoUseCase, useClass: DeleteEmpleoService },
    { provide: IGetEmpleoByIdUseCase, useClass: GetEmpleoByIdService },
    { provide: IListEmpleosUseCase, useClass: ListEmpleosService },
  ],
  exports: [EmpleoRepository],
})
export class EmpleosModule {}
