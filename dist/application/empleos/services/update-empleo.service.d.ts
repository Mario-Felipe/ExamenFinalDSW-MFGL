import { EmpleoRepository } from '../../../domain/empleos/empleo.repository';
import { UpdateEmpleoCommand } from '../dto/command/update-empleo.command';
import { EmpleoResponse } from '../dto/response/empleo.response';
import { IUpdateEmpleoUseCase } from '../ports/in/empleo.use-cases';
export declare class UpdateEmpleoService implements IUpdateEmpleoUseCase {
    private readonly empleoRepository;
    constructor(empleoRepository: EmpleoRepository);
    execute(command: UpdateEmpleoCommand): Promise<EmpleoResponse>;
}
