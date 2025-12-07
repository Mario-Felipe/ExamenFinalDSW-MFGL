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
exports.CreateEmpleoRequest = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateEmpleoRequest {
    nombre;
    categoria;
    areaTrabajo;
    empresa;
    nivel;
    sueldo;
    funciones;
    cargoJefe;
}
exports.CreateEmpleoRequest = CreateEmpleoRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Analista de Sistemas' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateEmpleoRequest.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tecnología' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateEmpleoRequest.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Desarrollo de Software' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateEmpleoRequest.prototype, "areaTrabajo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tech Solutions S.A.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateEmpleoRequest.prototype, "empresa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Junior' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateEmpleoRequest.prototype, "nivel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2800000 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateEmpleoRequest.prototype, "sueldo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Analizar requerimientos, desarrollar módulos y dar soporte técnico.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], CreateEmpleoRequest.prototype, "funciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Líder de Desarrollo' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateEmpleoRequest.prototype, "cargoJefe", void 0);
//# sourceMappingURL=create-empleo.request.js.map