import { EmpleoRepository } from '../../../domain/empleos/empleo.repository';
import { CreateEmpleoCommand } from '../dto/command/create-empleo.command';
import { EmpleoResponse } from '../dto/response/empleo.response';
import { ICreateEmpleoUseCase } from '../ports/in/empleo.use-cases';
export declare class CreateEmpleoService implements ICreateEmpleoUseCase {
    private readonly empleoRepository;
    constructor(empleoRepository: EmpleoRepository);
    execute(command: CreateEmpleoCommand): Promise<EmpleoResponse>;
}
