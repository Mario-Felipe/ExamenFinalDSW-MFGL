import { Empleo } from '../../../domain/empleos/empleo.entity';
import { EmpleoListResponse } from '../dto/response/empleo-list.response';
import { EmpleoResponse } from '../dto/response/empleo.response';
export declare class EmpleoMapper {
    static toResponse(empleo: Empleo): EmpleoResponse;
    static toList(empleos: Empleo[], total: number, page: number, pageSize: number): EmpleoListResponse;
}
