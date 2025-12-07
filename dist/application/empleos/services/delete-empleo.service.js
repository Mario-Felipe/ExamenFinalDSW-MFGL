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
exports.DeleteEmpleoService = void 0;
const common_1 = require("@nestjs/common");
const empleo_repository_1 = require("../../../domain/empleos/empleo.repository");
const empleo_id_vo_1 = require("../../../domain/empleos/value-objects/empleo-id.vo");
let DeleteEmpleoService = class DeleteEmpleoService {
    empleoRepository;
    constructor(empleoRepository) {
        this.empleoRepository = empleoRepository;
    }
    async execute(command) {
        await this.empleoRepository.delete(empleo_id_vo_1.EmpleoId.from(command.id));
    }
};
exports.DeleteEmpleoService = DeleteEmpleoService;
exports.DeleteEmpleoService = DeleteEmpleoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [empleo_repository_1.EmpleoRepository])
], DeleteEmpleoService);
//# sourceMappingURL=delete-empleo.service.js.map