import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpleoRepository } from '../../../../domain/empleos/empleo.repository';
import { Empleo } from '../../../../domain/empleos/empleo.entity';
import { EmpleoId } from '../../../../domain/empleos/value-objects/empleo-id.vo';
import { Nombre } from '../../../../domain/empleos/value-objects/nombre.vo';
import { Categoria } from '../../../../domain/empleos/value-objects/categoria.vo';
import { AreaTrabajo } from '../../../../domain/empleos/value-objects/area-trabajo.vo';
import { Empresa } from '../../../../domain/empleos/value-objects/empresa.vo';
import { Nivel } from '../../../../domain/empleos/value-objects/nivel.vo';
import { Sueldo } from '../../../../domain/empleos/value-objects/sueldo.vo';
import { Funciones } from '../../../../domain/empleos/value-objects/funciones.vo';
import { CargoJefe } from '../../../../domain/empleos/value-objects/cargo-jefe.vo';
import { EmpleoOrmEntity } from '../entities/empleo.orm-entity';

@Injectable()
export class EmpleoTypeOrmRepository implements EmpleoRepository {
  constructor(@InjectRepository(EmpleoOrmEntity) private readonly repo: Repository<EmpleoOrmEntity>) {}

  async findById(id: EmpleoId): Promise<Empleo | null> {
    const model = await this.repo.findOne({ where: { id: id.value } });
    return model ? this.toDomain(model) : null;
  }

  async findAll(): Promise<Empleo[]> {
    const models = await this.repo.find();
    return models.map((m) => this.toDomain(m));
  }

  async save(empleo: Empleo): Promise<void> {
    await this.repo.save(this.toOrm(empleo));
  }

  async delete(id: EmpleoId): Promise<void> {
    await this.repo.delete({ id: id.value });
  }

  private toDomain(model: EmpleoOrmEntity): Empleo {
    return Empleo.restore(
      EmpleoId.from(model.id),
      new Nombre(model.nombre),
      new Categoria(model.categoria),
      new AreaTrabajo(model.areaTrabajo),
      new Empresa(model.empresa),
      new Nivel(model.nivel),
      new Sueldo(Number(model.sueldo)),
      new Funciones(model.funciones),
      new CargoJefe(model.cargoJefe),
      model.createdAt,
      model.updatedAt,
    );
  }

  private toOrm(empleo: Empleo): EmpleoOrmEntity {
    return {
      id: empleo.id.value,
      nombre: empleo.nombre.value,
      categoria: empleo.categoria.value,
      areaTrabajo: empleo.areaTrabajo.value,
      empresa: empleo.empresa.value,
      nivel: empleo.nivel.value,
      sueldo: empleo.sueldo.value,
      funciones: empleo.funciones.value,
      cargoJefe: empleo.cargoJefe.value,
      createdAt: empleo.createdAt,
      updatedAt: empleo.updatedAt ?? null,
    };
  }
}
