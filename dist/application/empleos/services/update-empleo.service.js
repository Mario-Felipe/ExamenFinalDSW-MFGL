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
exports.UpdateEmpleoService = void 0;
const common_1 = require("@nestjs/common");
const empleo_repository_1 = require("../../../domain/empleos/empleo.repository");
const area_trabajo_vo_1 = require("../../../domain/empleos/value-objects/area-trabajo.vo");
const cargo_jefe_vo_1 = require("../../../domain/empleos/value-objects/cargo-jefe.vo");
const categoria_vo_1 = require("../../../domain/empleos/value-objects/categoria.vo");
const empleo_id_vo_1 = require("../../../domain/empleos/value-objects/empleo-id.vo");
const empresa_vo_1 = require("../../../domain/empleos/value-objects/empresa.vo");
const funciones_vo_1 = require("../../../domain/empleos/value-objects/funciones.vo");
const nivel_vo_1 = require("../../../domain/empleos/value-objects/nivel.vo");
const nombre_vo_1 = require("../../../domain/empleos/value-objects/nombre.vo");
const sueldo_vo_1 = require("../../../domain/empleos/value-objects/sueldo.vo");
const empleo_mapper_1 = require("../mapper/empleo.mapper");
let UpdateEmpleoService = class UpdateEmpleoService {
    empleoRepository;
    constructor(empleoRepository) {
        this.empleoRepository = empleoRepository;
    }
    async execute(command) {
        const empleo = await this.empleoRepository.findById(empleo_id_vo_1.EmpleoId.from(command.id));
        if (!empleo) {
            throw new Error('Empleo no encontrado');
        }
        empleo.update(new nombre_vo_1.Nombre(command.nombre), new categoria_vo_1.Categoria(command.categoria), new area_trabajo_vo_1.AreaTrabajo(command.areaTrabajo), new empresa_vo_1.Empresa(command.empresa), new nivel_vo_1.Nivel(command.nivel), new sueldo_vo_1.Sueldo(command.sueldo), new funciones_vo_1.Funciones(command.funciones), new cargo_jefe_vo_1.CargoJefe(command.cargoJefe));
        await this.empleoRepository.save(empleo);
        return empleo_mapper_1.EmpleoMapper.toResponse(empleo);
    }
};
exports.UpdateEmpleoService = UpdateEmpleoService;
exports.UpdateEmpleoService = UpdateEmpleoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [empleo_repository_1.EmpleoRepository])
], UpdateEmpleoService);
//# sourceMappingURL=update-empleo.service.js.map