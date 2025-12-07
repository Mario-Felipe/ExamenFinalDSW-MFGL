import { Injectable } from '@nestjs/common';
import { EmpleoRepository } from '../../../domain/empleos/empleo.repository';
import { Empleo } from '../../../domain/empleos/empleo.entity';
import { AreaTrabajo } from '../../../domain/empleos/value-objects/area-trabajo.vo';
import { CargoJefe } from '../../../domain/empleos/value-objects/cargo-jefe.vo';
import { Categoria } from '../../../domain/empleos/value-objects/categoria.vo';
import { Empresa } from '../../../domain/empleos/value-objects/empresa.vo';
import { Funciones } from '../../../domain/empleos/value-objects/funciones.vo';
import { Nivel } from '../../../domain/empleos/value-objects/nivel.vo';
import { Nombre } from '../../../domain/empleos/value-objects/nombre.vo';
import { Sueldo } from '../../../domain/empleos/value-objects/sueldo.vo';
import { CreateEmpleoCommand } from '../dto/command/create-empleo.command';
import { EmpleoResponse } from '../dto/response/empleo.response';
import { EmpleoMapper } from '../mapper/empleo.mapper';
import { ICreateEmpleoUseCase } from '../ports/in/empleo.use-cases';

@Injectable()
export class CreateEmpleoService implements ICreateEmpleoUseCase {
  constructor(private readonly empleoRepository: EmpleoRepository) {}

  async execute(command: CreateEmpleoCommand): Promise<EmpleoResponse> {
    const empleo = Empleo.create(
      new Nombre(command.nombre),
      new Categoria(command.categoria),
      new AreaTrabajo(command.areaTrabajo),
      new Empresa(command.empresa),
      new Nivel(command.nivel),
      new Sueldo(command.sueldo),
      new Funciones(command.funciones),
      new CargoJefe(command.cargoJefe),
    );

    await this.empleoRepository.save(empleo);
    return EmpleoMapper.toResponse(empleo);
  }
}
