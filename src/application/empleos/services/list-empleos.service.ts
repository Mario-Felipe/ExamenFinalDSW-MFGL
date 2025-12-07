import { Injectable } from '@nestjs/common';
import { EmpleoRepository } from '../../../domain/empleos/empleo.repository';
import { IListEmpleosUseCase } from '../ports/in/empleo.use-cases';
import { ListEmpleosQuery } from '../dto/query/list-empleos.query';
import { EmpleoListResponse } from '../dto/response/empleo-list.response';
import { EmpleoMapper } from '../mapper/empleo.mapper';

@Injectable()
export class ListEmpleosService implements IListEmpleosUseCase {
  constructor(private readonly empleoRepository: EmpleoRepository) {}

  async execute(query: ListEmpleosQuery): Promise<EmpleoListResponse> {
    let empleos = await this.empleoRepository.findAll();

    if (query.categoria) {
      empleos = empleos.filter((e) => e.categoria.value.toLowerCase() === query.categoria!.toLowerCase());
    }
    if (query.empresa) {
      empleos = empleos.filter((e) => e.empresa.value.toLowerCase() === query.empresa!.toLowerCase());
    }
    if (query.nivel) {
      empleos = empleos.filter((e) => e.nivel.value.toLowerCase() === query.nivel!.toLowerCase());
    }
    if (query.areaTrabajo) {
      empleos = empleos.filter((e) => e.areaTrabajo.value.toLowerCase() === query.areaTrabajo!.toLowerCase());
    }
    if (query.minSueldo !== undefined) {
      empleos = empleos.filter((e) => e.sueldo.value >= query.minSueldo!);
    }
    if (query.maxSueldo !== undefined) {
      empleos = empleos.filter((e) => e.sueldo.value <= query.maxSueldo!);
    }
    if (query.searchTerm) {
      const term = query.searchTerm.toLowerCase();
      empleos = empleos.filter(
        (e) =>
          e.nombre.value.toLowerCase().includes(term) ||
          e.funciones.value.toLowerCase().includes(term) ||
          e.empresa.value.toLowerCase().includes(term),
      );
    }

    const total = empleos.length;
    const start = (query.page - 1) * query.pageSize;
    const paged = empleos.slice(start, start + query.pageSize);

    return EmpleoMapper.toList(paged, total, query.page, query.pageSize);
  }
}
