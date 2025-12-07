import { EmpleoRepository } from '../../../domain/empleos/empleo.repository';
import { DeleteEmpleoCommand } from '../dto/command/delete-empleo.command';
import { IDeleteEmpleoUseCase } from '../ports/in/empleo.use-cases';
export declare class DeleteEmpleoService implements IDeleteEmpleoUseCase {
    private readonly empleoRepository;
    constructor(empleoRepository: EmpleoRepository);
    execute(command: DeleteEmpleoCommand): Promise<void>;
}
