import { Injectable } from '@nestjs/common';
import { EmpleoRepository } from '../../../domain/empleos/empleo.repository';
import { EmpleoId } from '../../../domain/empleos/value-objects/empleo-id.vo';
import { DeleteEmpleoCommand } from '../dto/command/delete-empleo.command';
import { IDeleteEmpleoUseCase } from '../ports/in/empleo.use-cases';

@Injectable()
export class DeleteEmpleoService implements IDeleteEmpleoUseCase {
  constructor(private readonly empleoRepository: EmpleoRepository) {}

  async execute(command: DeleteEmpleoCommand): Promise<void> {
    await this.empleoRepository.delete(EmpleoId.from(command.id));
  }
}
