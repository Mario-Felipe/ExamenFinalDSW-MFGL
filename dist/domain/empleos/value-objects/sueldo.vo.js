"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sueldo = void 0;
const value_object_1 = require("../../shared/value-object");
class Sueldo extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new Error('El sueldo es requerido');
        }
        if (value < 0) {
            throw new Error('El sueldo no puede ser negativo');
        }
        this.props = { value };
    }
    get value() {
        return this.props.value;
    }
}
exports.Sueldo = Sueldo;
//# sourceMappingURL=sueldo.vo.js.map