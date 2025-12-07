import { AggregateRoot } from '../shared/aggregate-root';
import { AreaTrabajo } from './value-objects/area-trabajo.vo';
import { CargoJefe } from './value-objects/cargo-jefe.vo';
import { Categoria } from './value-objects/categoria.vo';
import { EmpleoId } from './value-objects/empleo-id.vo';
import { Empresa } from './value-objects/empresa.vo';
import { Funciones } from './value-objects/funciones.vo';
import { Nivel } from './value-objects/nivel.vo';
import { Nombre } from './value-objects/nombre.vo';
import { Sueldo } from './value-objects/sueldo.vo';

export class Empleo extends AggregateRoot {
  private constructor(
    public readonly id: EmpleoId,
    private _nombre: Nombre,
    private _categoria: Categoria,
    private _areaTrabajo: AreaTrabajo,
    private _empresa: Empresa,
    private _nivel: Nivel,
    private _sueldo: Sueldo,
    private _funciones: Funciones,
    private _cargoJefe: CargoJefe,
    private _createdAt: Date,
    private _updatedAt?: Date | null,
  ) {
    super();
  }

  static create(
    nombre: Nombre,
    categoria: Categoria,
    areaTrabajo: AreaTrabajo,
    empresa: Empresa,
    nivel: Nivel,
    sueldo: Sueldo,
    funciones: Funciones,
    cargoJefe: CargoJefe,
  ): Empleo {
    return new Empleo(
      EmpleoId.new(),
      nombre,
      categoria,
      areaTrabajo,
      empresa,
      nivel,
      sueldo,
      funciones,
      cargoJefe,
      new Date(),
      null,
    );
  }

  static restore(
    id: EmpleoId,
    nombre: Nombre,
    categoria: Categoria,
    areaTrabajo: AreaTrabajo,
    empresa: Empresa,
    nivel: Nivel,
    sueldo: Sueldo,
    funciones: Funciones,
    cargoJefe: CargoJefe,
    createdAt: Date,
    updatedAt?: Date | null,
  ): Empleo {
    return new Empleo(
      id,
      nombre,
      categoria,
      areaTrabajo,
      empresa,
      nivel,
      sueldo,
      funciones,
      cargoJefe,
      createdAt,
      updatedAt,
    );
  }

  get nombre(): Nombre {
    return this._nombre;
  }
  get categoria(): Categoria {
    return this._categoria;
  }
  get areaTrabajo(): AreaTrabajo {
    return this._areaTrabajo;
  }
  get empresa(): Empresa {
    return this._empresa;
  }
  get nivel(): Nivel {
    return this._nivel;
  }
  get sueldo(): Sueldo {
    return this._sueldo;
  }
  get funciones(): Funciones {
    return this._funciones;
  }
  get cargoJefe(): CargoJefe {
    return this._cargoJefe;
  }
  get createdAt(): Date {
    return this._createdAt;
  }
  get updatedAt(): Date | null | undefined {
    return this._updatedAt;
  }

  update(
    nombre: Nombre,
    categoria: Categoria,
    areaTrabajo: AreaTrabajo,
    empresa: Empresa,
    nivel: Nivel,
    sueldo: Sueldo,
    funciones: Funciones,
    cargoJefe: CargoJefe,
  ): void {
    this._nombre = nombre;
    this._categoria = categoria;
    this._areaTrabajo = areaTrabajo;
    this._empresa = empresa;
    this._nivel = nivel;
    this._sueldo = sueldo;
    this._funciones = funciones;
    this._cargoJefe = cargoJefe;
    this._updatedAt = new Date();
  }
}
