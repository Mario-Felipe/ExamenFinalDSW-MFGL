import { EmpleoId } from './value-objects/empleo-id.vo';
import { Empleo } from './empleo.entity';

export abstract class EmpleoRepository {
  abstract findById(id: EmpleoId): Promise<Empleo | null>;
  abstract findAll(): Promise<Empleo[]>;
  abstract save(empleo: Empleo): Promise<void>;
  abstract delete(id: EmpleoId): Promise<void>;
}
