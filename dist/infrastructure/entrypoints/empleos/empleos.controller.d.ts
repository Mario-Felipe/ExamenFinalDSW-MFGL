import { ICreateEmpleoUseCase, IDeleteEmpleoUseCase, IGetEmpleoByIdUseCase, IListEmpleosUseCase, IUpdateEmpleoUseCase } from '../../../application/empleos/ports/in/empleo.use-cases';
import { CreateEmpleoRequest } from './dto/create-empleo.request';
import { UpdateEmpleoRequest } from './dto/update-empleo.request';
export declare class EmpleosController {
    private readonly createUseCase;
    private readonly updateUseCase;
    private readonly deleteUseCase;
    private readonly getByIdUseCase;
    private readonly listUseCase;
    constructor(createUseCase: ICreateEmpleoUseCase, updateUseCase: IUpdateEmpleoUseCase, deleteUseCase: IDeleteEmpleoUseCase, getByIdUseCase: IGetEmpleoByIdUseCase, listUseCase: IListEmpleosUseCase);
    create(request: CreateEmpleoRequest): Promise<import("../../../application/empleos/dto/response/empleo.response").EmpleoResponse>;
    getById(id: string): Promise<import("../../../application/empleos/dto/response/empleo.response").EmpleoResponse | null>;
    list(page?: number, pageSize?: number, searchTerm?: string, categoria?: string, empresa?: string, nivel?: string, areaTrabajo?: string, minSueldo?: string, maxSueldo?: string): Promise<import("../../../application/empleos/dto/response/empleo-list.response").EmpleoListResponse>;
    update(id: string, request: UpdateEmpleoRequest): Promise<import("../../../application/empleos/dto/response/empleo.response").EmpleoResponse>;
    delete(id: string): Promise<void>;
}
