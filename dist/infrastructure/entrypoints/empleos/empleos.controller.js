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
exports.EmpleosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const empleo_use_cases_1 = require("../../../application/empleos/ports/in/empleo.use-cases");
const create_empleo_request_1 = require("./dto/create-empleo.request");
const update_empleo_request_1 = require("./dto/update-empleo.request");
const delete_empleo_command_1 = require("../../../application/empleos/dto/command/delete-empleo.command");
const get_empleo_by_id_query_1 = require("../../../application/empleos/dto/query/get-empleo-by-id.query");
const list_empleos_query_1 = require("../../../application/empleos/dto/query/list-empleos.query");
const domain_exception_filter_1 = require("../common/domain-exception.filter");
let EmpleosController = class EmpleosController {
    createUseCase;
    updateUseCase;
    deleteUseCase;
    getByIdUseCase;
    listUseCase;
    constructor(createUseCase, updateUseCase, deleteUseCase, getByIdUseCase, listUseCase) {
        this.createUseCase = createUseCase;
        this.updateUseCase = updateUseCase;
        this.deleteUseCase = deleteUseCase;
        this.getByIdUseCase = getByIdUseCase;
        this.listUseCase = listUseCase;
    }
    create(request) {
        const command = request;
        return this.createUseCase.execute(command);
    }
    getById(id) {
        const query = new get_empleo_by_id_query_1.GetEmpleoByIdQuery();
        query.id = id;
        return this.getByIdUseCase.execute(query);
    }
    list(page = 1, pageSize = 10, searchTerm, categoria, empresa, nivel, areaTrabajo, minSueldo, maxSueldo) {
        const query = new list_empleos_query_1.ListEmpleosQuery();
        query.page = Number(page) || 1;
        query.pageSize = Number(pageSize) || 10;
        query.searchTerm = searchTerm;
        query.categoria = categoria;
        query.empresa = empresa;
        query.nivel = nivel;
        query.areaTrabajo = areaTrabajo;
        const min = minSueldo !== undefined ? Number(minSueldo) : undefined;
        const max = maxSueldo !== undefined ? Number(maxSueldo) : undefined;
        query.minSueldo = min !== undefined && !Number.isNaN(min) ? min : undefined;
        query.maxSueldo = max !== undefined && !Number.isNaN(max) ? max : undefined;
        return this.listUseCase.execute(query);
    }
    update(id, request) {
        const command = request;
        command.id = id;
        return this.updateUseCase.execute(command);
    }
    delete(id) {
        const command = new delete_empleo_command_1.DeleteEmpleoCommand();
        command.id = id;
        return this.deleteUseCase.execute(command);
    }
};
exports.EmpleosController = EmpleosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear empleo' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_empleo_request_1.CreateEmpleoRequest]),
    __metadata("design:returntype", void 0)
], EmpleosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener empleo por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmpleosController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar empleos' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'searchTerm', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'categoria', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'empresa', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'nivel', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'areaTrabajo', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'minSueldo', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'maxSueldo', required: false, type: Number }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Query)('searchTerm')),
    __param(3, (0, common_1.Query)('categoria')),
    __param(4, (0, common_1.Query)('empresa')),
    __param(5, (0, common_1.Query)('nivel')),
    __param(6, (0, common_1.Query)('areaTrabajo')),
    __param(7, (0, common_1.Query)('minSueldo')),
    __param(8, (0, common_1.Query)('maxSueldo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], EmpleosController.prototype, "list", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar empleo' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_empleo_request_1.UpdateEmpleoRequest]),
    __metadata("design:returntype", void 0)
], EmpleosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar empleo' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmpleosController.prototype, "delete", null);
exports.EmpleosController = EmpleosController = __decorate([
    (0, swagger_1.ApiTags)('empleos'),
    (0, common_1.Controller)('empleos'),
    (0, common_1.UseFilters)(new domain_exception_filter_1.DomainExceptionFilter()),
    __metadata("design:paramtypes", [empleo_use_cases_1.ICreateEmpleoUseCase,
        empleo_use_cases_1.IUpdateEmpleoUseCase,
        empleo_use_cases_1.IDeleteEmpleoUseCase,
        empleo_use_cases_1.IGetEmpleoByIdUseCase,
        empleo_use_cases_1.IListEmpleosUseCase])
], EmpleosController);
//# sourceMappingURL=empleos.controller.js.map