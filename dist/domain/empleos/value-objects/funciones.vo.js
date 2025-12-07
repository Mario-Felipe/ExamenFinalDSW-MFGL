"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funciones = void 0;
const value_object_1 = require("../../shared/value-object");
class Funciones extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('Las funciones no pueden estar vacias');
        }
        if (trimmed.length > 2000) {
            throw new Error('Las funciones son demasiado largas');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Funciones = Funciones;
//# sourceMappingURL=funciones.vo.js.map