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
exports.GetEmpleoByIdService = void 0;
const common_1 = require("@nestjs/common");
const empleo_repository_1 = require("../../../domain/empleos/empleo.repository");
const empleo_id_vo_1 = require("../../../domain/empleos/value-objects/empleo-id.vo");
const empleo_mapper_1 = require("../mapper/empleo.mapper");
let GetEmpleoByIdService = class GetEmpleoByIdService {
    empleoRepository;
    constructor(empleoRepository) {
        this.empleoRepository = empleoRepository;
    }
    async execute(query) {
        const empleo = await this.empleoRepository.findById(empleo_id_vo_1.EmpleoId.from(query.id));
        return empleo ? empleo_mapper_1.EmpleoMapper.toResponse(empleo) : null;
    }
};
exports.GetEmpleoByIdService = GetEmpleoByIdService;
exports.GetEmpleoByIdService = GetEmpleoByIdService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [empleo_repository_1.EmpleoRepository])
], GetEmpleoByIdService);
//# sourceMappingURL=get-empleo-by-id.service.js.map