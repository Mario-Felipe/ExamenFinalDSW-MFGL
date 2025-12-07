import { Empleo } from '../../../domain/empleos/empleo.entity';
import { EmpleoListResponse } from '../dto/response/empleo-list.response';
import { EmpleoResponse } from '../dto/response/empleo.response';

export class EmpleoMapper {
  static toResponse(empleo: Empleo): EmpleoResponse {
    return {
      id: empleo.id.value,
      nombre: empleo.nombre.value,
      categoria: empleo.categoria.value,
      areaTrabajo: empleo.areaTrabajo.value,
      empresa: empleo.empresa.value,
      nivel: empleo.nivel.value,
      sueldo: empleo.sueldo.value,
      funciones: empleo.funciones.value,
      cargoJefe: empleo.cargoJefe.value,
      createdAt: empleo.createdAt,
      updatedAt: empleo.updatedAt ?? null,
    };
  }

  static toList(empleos: Empleo[], total: number, page: number, pageSize: number): EmpleoListResponse {
    return {
      empleos: empleos.map((e) => this.toResponse(e)),
      totalCount: total,
      page,
      pageSize,
    };
  }
}
