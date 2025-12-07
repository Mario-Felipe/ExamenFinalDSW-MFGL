import { EmpleoRepository } from '../../../domain/empleos/empleo.repository';
import { IListEmpleosUseCase } from '../ports/in/empleo.use-cases';
import { ListEmpleosQuery } from '../dto/query/list-empleos.query';
import { EmpleoListResponse } from '../dto/response/empleo-list.response';
export declare class ListEmpleosService implements IListEmpleosUseCase {
    private readonly empleoRepository;
    constructor(empleoRepository: EmpleoRepository);
    execute(query: ListEmpleosQuery): Promise<EmpleoListResponse>;
}
