import { EmpleoRepository } from '../../../domain/empleos/empleo.repository';
import { GetEmpleoByIdQuery } from '../dto/query/get-empleo-by-id.query';
import { EmpleoResponse } from '../dto/response/empleo.response';
import { IGetEmpleoByIdUseCase } from '../ports/in/empleo.use-cases';
export declare class GetEmpleoByIdService implements IGetEmpleoByIdUseCase {
    private readonly empleoRepository;
    constructor(empleoRepository: EmpleoRepository);
    execute(query: GetEmpleoByIdQuery): Promise<EmpleoResponse | null>;
}
