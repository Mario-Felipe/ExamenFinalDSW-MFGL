"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleoOrmEntity = void 0;
const typeorm_1 = require("typeorm");
let EmpleoOrmEntity = class EmpleoOrmEntity {
    id;
    nombre;
    categoria;
    areaTrabajo;
    empresa;
    nivel;
    sueldo;
    funciones;
    cargoJefe;
    createdAt;
    updatedAt;
};
exports.EmpleoOrmEntity = EmpleoOrmEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EmpleoOrmEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre', length: 100 }),
    __metadata("design:type", String)
], EmpleoOrmEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'categoria', length: 50 }),
    __metadata("design:type", String)
], EmpleoOrmEntity.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'area_trabajo', length: 100 }),
    __metadata("design:type", String)
], EmpleoOrmEntity.prototype, "areaTrabajo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'empresa', length: 100 }),
    __metadata("design:type", String)
], EmpleoOrmEntity.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nivel', length: 50 }),
    __metadata("design:type", String)
], EmpleoOrmEntity.prototype, "nivel", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sueldo', type: 'numeric', precision: 18, scale: 2 }),
    __metadata("design:type", Number)
], EmpleoOrmEntity.prototype, "sueldo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'funciones', length: 2000 }),
    __metadata("design:type", String)
], EmpleoOrmEntity.prototype, "funciones", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cargo_jefe', length: 100 }),
    __metadata("design:type", String)
], EmpleoOrmEntity.prototype, "cargoJefe", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', type: 'timestamp with time zone' }),
    __metadata("design:type", Date)
], EmpleoOrmEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', type: 'timestamp with time zone', nullable: true }),
    __metadata("design:type", Object)
], EmpleoOrmEntity.prototype, "updatedAt", void 0);
exports.EmpleoOrmEntity = EmpleoOrmEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'empleos' })
], EmpleoOrmEntity);
//# sourceMappingURL=empleo.orm-entity.js.map