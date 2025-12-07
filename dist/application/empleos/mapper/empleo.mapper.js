"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleoMapper = void 0;
class EmpleoMapper {
    static toResponse(empleo) {
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
    static toList(empleos, total, page, pageSize) {
        return {
            empleos: empleos.map((e) => this.toResponse(e)),
            totalCount: total,
            page,
            pageSize,
        };
    }
}
exports.EmpleoMapper = EmpleoMapper;
//# sourceMappingURL=empleo.mapper.js.map