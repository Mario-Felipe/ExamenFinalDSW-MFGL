"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoJefe = void 0;
const value_object_1 = require("../../shared/value-object");
class CargoJefe extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El cargo del jefe no puede estar vacio');
        }
        if (trimmed.length > 100) {
            throw new Error('El cargo del jefe es demasiado largo');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.CargoJefe = CargoJefe;
//# sourceMappingURL=cargo-jefe.vo.js.map