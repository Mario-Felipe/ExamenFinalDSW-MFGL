"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
const value_object_1 = require("../../shared/value-object");
class Empresa extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('La empresa no puede estar vacia');
        }
        if (trimmed.length > 100) {
            throw new Error('La empresa es demasiado larga');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Empresa = Empresa;
//# sourceMappingURL=empresa.vo.js.map