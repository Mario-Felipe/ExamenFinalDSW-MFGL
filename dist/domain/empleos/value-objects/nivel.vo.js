"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nivel = void 0;
const value_object_1 = require("../../shared/value-object");
class Nivel extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El nivel no puede estar vacio');
        }
        if (trimmed.length > 50) {
            throw new Error('El nivel es demasiado largo');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Nivel = Nivel;
//# sourceMappingURL=nivel.vo.js.map