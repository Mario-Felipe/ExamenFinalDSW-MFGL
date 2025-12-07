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
exports.ListEmpleosService = void 0;
const common_1 = require("@nestjs/common");
const empleo_repository_1 = require("../../../domain/empleos/empleo.repository");
const empleo_mapper_1 = require("../mapper/empleo.mapper");
let ListEmpleosService = class ListEmpleosService {
    empleoRepository;
    constructor(empleoRepository) {
        this.empleoRepository = empleoRepository;
    }
    async execute(query) {
        let empleos = await this.empleoRepository.findAll();
        if (query.categoria) {
            empleos = empleos.filter((e) => e.categoria.value.toLowerCase() === query.categoria.toLowerCase());
        }
        if (query.empresa) {
            empleos = empleos.filter((e) => e.empresa.value.toLowerCase() === query.empresa.toLowerCase());
        }
        if (query.nivel) {
            empleos = empleos.filter((e) => e.nivel.value.toLowerCase() === query.nivel.toLowerCase());
        }
        if (query.areaTrabajo) {
            empleos = empleos.filter((e) => e.areaTrabajo.value.toLowerCase() === query.areaTrabajo.toLowerCase());
        }
        if (query.minSueldo !== undefined) {
            empleos = empleos.filter((e) => e.sueldo.value >= query.minSueldo);
        }
        if (query.maxSueldo !== undefined) {
            empleos = empleos.filter((e) => e.sueldo.value <= query.maxSueldo);
        }
        if (query.searchTerm) {
            const term = query.searchTerm.toLowerCase();
            empleos = empleos.filter((e) => e.nombre.value.toLowerCase().includes(term) ||
                e.funciones.value.toLowerCase().includes(term) ||
                e.empresa.value.toLowerCase().includes(term));
        }
        const total = empleos.length;
        const start = (query.page - 1) * query.pageSize;
        const paged = empleos.slice(start, start + query.pageSize);
        return empleo_mapper_1.EmpleoMapper.toList(paged, total, query.page, query.pageSize);
    }
};
exports.ListEmpleosService = ListEmpleosService;
exports.ListEmpleosService = ListEmpleosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [empleo_repository_1.EmpleoRepository])
], ListEmpleosService);
//# sourceMappingURL=list-empleos.service.js.map