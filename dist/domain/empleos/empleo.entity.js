"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleo = void 0;
const aggregate_root_1 = require("../shared/aggregate-root");
const empleo_id_vo_1 = require("./value-objects/empleo-id.vo");
class Empleo extends aggregate_root_1.AggregateRoot {
    id;
    _nombre;
    _categoria;
    _areaTrabajo;
    _empresa;
    _nivel;
    _sueldo;
    _funciones;
    _cargoJefe;
    _createdAt;
    _updatedAt;
    constructor(id, _nombre, _categoria, _areaTrabajo, _empresa, _nivel, _sueldo, _funciones, _cargoJefe, _createdAt, _updatedAt) {
        super();
        this.id = id;
        this._nombre = _nombre;
        this._categoria = _categoria;
        this._areaTrabajo = _areaTrabajo;
        this._empresa = _empresa;
        this._nivel = _nivel;
        this._sueldo = _sueldo;
        this._funciones = _funciones;
        this._cargoJefe = _cargoJefe;
        this._createdAt = _createdAt;
        this._updatedAt = _updatedAt;
    }
    static create(nombre, categoria, areaTrabajo, empresa, nivel, sueldo, funciones, cargoJefe) {
        return new Empleo(empleo_id_vo_1.EmpleoId.new(), nombre, categoria, areaTrabajo, empresa, nivel, sueldo, funciones, cargoJefe, new Date(), null);
    }
    static restore(id, nombre, categoria, areaTrabajo, empresa, nivel, sueldo, funciones, cargoJefe, createdAt, updatedAt) {
        return new Empleo(id, nombre, categoria, areaTrabajo, empresa, nivel, sueldo, funciones, cargoJefe, createdAt, updatedAt);
    }
    get nombre() {
        return this._nombre;
    }
    get categoria() {
        return this._categoria;
    }
    get areaTrabajo() {
        return this._areaTrabajo;
    }
    get empresa() {
        return this._empresa;
    }
    get nivel() {
        return this._nivel;
    }
    get sueldo() {
        return this._sueldo;
    }
    get funciones() {
        return this._funciones;
    }
    get cargoJefe() {
        return this._cargoJefe;
    }
    get createdAt() {
        return this._createdAt;
    }
    get updatedAt() {
        return this._updatedAt;
    }
    update(nombre, categoria, areaTrabajo, empresa, nivel, sueldo, funciones, cargoJefe) {
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
exports.Empleo = Empleo;
//# sourceMappingURL=empleo.entity.js.map