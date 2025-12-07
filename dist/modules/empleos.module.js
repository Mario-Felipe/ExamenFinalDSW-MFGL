"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const services_1 = require("../application/empleos/services");
const empleo_use_cases_1 = require("../application/empleos/ports/in/empleo.use-cases");
const empleo_repository_1 = require("../domain/empleos/empleo.repository");
const empleos_controller_1 = require("../infrastructure/entrypoints/empleos/empleos.controller");
const empleo_orm_entity_1 = require("../infrastructure/persistence/typeorm/entities/empleo.orm-entity");
const empleo_typeorm_repository_1 = require("../infrastructure/persistence/typeorm/repositories/empleo-typeorm.repository");
let EmpleosModule = class EmpleosModule {
};
exports.EmpleosModule = EmpleosModule;
exports.EmpleosModule = EmpleosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([empleo_orm_entity_1.EmpleoOrmEntity])],
        controllers: [empleos_controller_1.EmpleosController],
        providers: [
            { provide: empleo_repository_1.EmpleoRepository, useClass: empleo_typeorm_repository_1.EmpleoTypeOrmRepository },
            { provide: empleo_use_cases_1.ICreateEmpleoUseCase, useClass: services_1.CreateEmpleoService },
            { provide: empleo_use_cases_1.IUpdateEmpleoUseCase, useClass: services_1.UpdateEmpleoService },
            { provide: empleo_use_cases_1.IDeleteEmpleoUseCase, useClass: services_1.DeleteEmpleoService },
            { provide: empleo_use_cases_1.IGetEmpleoByIdUseCase, useClass: services_1.GetEmpleoByIdService },
            { provide: empleo_use_cases_1.IListEmpleosUseCase, useClass: services_1.ListEmpleosService },
        ],
        exports: [empleo_repository_1.EmpleoRepository],
    })
], EmpleosModule);
//# sourceMappingURL=empleos.module.js.map