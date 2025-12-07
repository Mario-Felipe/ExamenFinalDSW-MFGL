import { Repository } from 'typeorm';
import { EmpleoRepository } from '../../../../domain/empleos/empleo.repository';
import { Empleo } from '../../../../domain/empleos/empleo.entity';
import { EmpleoId } from '../../../../domain/empleos/value-objects/empleo-id.vo';
import { EmpleoOrmEntity } from '../entities/empleo.orm-entity';
export declare class EmpleoTypeOrmRepository implements EmpleoRepository {
    private readonly repo;
    constructor(repo: Repository<EmpleoOrmEntity>);
    findById(id: EmpleoId): Promise<Empleo | null>;
    findAll(): Promise<Empleo[]>;
    save(empleo: Empleo): Promise<void>;
    delete(id: EmpleoId): Promise<void>;
    private toDomain;
    private toOrm;
}
