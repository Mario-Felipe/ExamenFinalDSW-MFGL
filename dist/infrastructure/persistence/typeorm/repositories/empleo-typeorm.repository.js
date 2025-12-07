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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleoTypeOrmRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const empleo_entity_1 = require("../../../../domain/empleos/empleo.entity");
const empleo_id_vo_1 = require("../../../../domain/empleos/value-objects/empleo-id.vo");
const nombre_vo_1 = require("../../../../domain/empleos/value-objects/nombre.vo");
const categoria_vo_1 = require("../../../../domain/empleos/value-objects/categoria.vo");
const area_trabajo_vo_1 = require("../../../../domain/empleos/value-objects/area-trabajo.vo");
const empresa_vo_1 = require("../../../../domain/empleos/value-objects/empresa.vo");
const nivel_vo_1 = require("../../../../domain/empleos/value-objects/nivel.vo");
const sueldo_vo_1 = require("../../../../domain/empleos/value-objects/sueldo.vo");
const funciones_vo_1 = require("../../../../domain/empleos/value-objects/funciones.vo");
const cargo_jefe_vo_1 = require("../../../../domain/empleos/value-objects/cargo-jefe.vo");
const empleo_orm_entity_1 = require("../entities/empleo.orm-entity");
let EmpleoTypeOrmRepository = class EmpleoTypeOrmRepository {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async findById(id) {
        const model = await this.repo.findOne({ where: { id: id.value } });
        return model ? this.toDomain(model) : null;
    }
    async findAll() {
        const models = await this.repo.find();
        return models.map((m) => this.toDomain(m));
    }
    async save(empleo) {
        await this.repo.save(this.toOrm(empleo));
    }
    async delete(id) {
        await this.repo.delete({ id: id.value });
    }
    toDomain(model) {
        return empleo_entity_1.Empleo.restore(empleo_id_vo_1.EmpleoId.from(model.id), new nombre_vo_1.Nombre(model.nombre), new categoria_vo_1.Categoria(model.categoria), new area_trabajo_vo_1.AreaTrabajo(model.areaTrabajo), new empresa_vo_1.Empresa(model.empresa), new nivel_vo_1.Nivel(model.nivel), new sueldo_vo_1.Sueldo(Number(model.sueldo)), new funciones_vo_1.Funciones(model.funciones), new cargo_jefe_vo_1.CargoJefe(model.cargoJefe), model.createdAt, model.updatedAt);
    }
    toOrm(empleo) {
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
};
exports.EmpleoTypeOrmRepository = EmpleoTypeOrmRepository;
exports.EmpleoTypeOrmRepository = EmpleoTypeOrmRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(empleo_orm_entity_1.EmpleoOrmEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmpleoTypeOrmRepository);
//# sourceMappingURL=empleo-typeorm.repository.js.map