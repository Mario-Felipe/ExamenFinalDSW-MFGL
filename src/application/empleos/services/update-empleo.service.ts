import { Injectable } from '@nestjs/common';
import { EmpleoRepository } from '../../../domain/empleos/empleo.repository';
import { AreaTrabajo } from '../../../domain/empleos/value-objects/area-trabajo.vo';
import { CargoJefe } from '../../../domain/empleos/value-objects/cargo-jefe.vo';
import { Categoria } from '../../../domain/empleos/value-objects/categoria.vo';
import { EmpleoId } from '../../../domain/empleos/value-objects/empleo-id.vo';
import { Empresa } from '../../../domain/empleos/value-objects/empresa.vo';
import { Funciones } from '../../../domain/empleos/value-objects/funciones.vo';
import { Nivel } from '../../../domain/empleos/value-objects/nivel.vo';
import { Nombre } from '../../../domain/empleos/value-objects/nombre.vo';
import { Sueldo } from '../../../domain/empleos/value-objects/sueldo.vo';
import { UpdateEmpleoCommand } from '../dto/command/update-empleo.command';
import { EmpleoResponse } from '../dto/response/empleo.response';
import { EmpleoMapper } from '../mapper/empleo.mapper';
import { IUpdateEmpleoUseCase } from '../ports/in/empleo.use-cases';

@Injectable()
export class UpdateEmpleoService implements IUpdateEmpleoUseCase {
  constructor(private readonly empleoRepository: EmpleoRepository) {}

  async execute(command: UpdateEmpleoCommand): Promise<EmpleoResponse> {
    const empleo = await this.empleoRepository.findById(EmpleoId.from(command.id));
    if (!empleo) {
      throw new Error('Empleo no encontrado');
    }

    empleo.update(
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
