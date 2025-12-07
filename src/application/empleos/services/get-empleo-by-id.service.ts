import { Injectable } from '@nestjs/common';
import { EmpleoRepository } from '../../../domain/empleos/empleo.repository';
import { EmpleoId } from '../../../domain/empleos/value-objects/empleo-id.vo';
import { GetEmpleoByIdQuery } from '../dto/query/get-empleo-by-id.query';
import { EmpleoResponse } from '../dto/response/empleo.response';
import { EmpleoMapper } from '../mapper/empleo.mapper';
import { IGetEmpleoByIdUseCase } from '../ports/in/empleo.use-cases';

@Injectable()
export class GetEmpleoByIdService implements IGetEmpleoByIdUseCase {
  constructor(private readonly empleoRepository: EmpleoRepository) {}

  async execute(query: GetEmpleoByIdQuery): Promise<EmpleoResponse | null> {
    const empleo = await this.empleoRepository.findById(EmpleoId.from(query.id));
    return empleo ? EmpleoMapper.toResponse(empleo) : null;
  }
}
