"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nombre = void 0;
const value_object_1 = require("../../shared/value-object");
class Nombre extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El nombre no puede estar vacio');
        }
        if (trimmed.length > 100) {
            throw new Error('El nombre es demasiado largo');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Nombre = Nombre;
//# sourceMappingURL=nombre.vo.js.map