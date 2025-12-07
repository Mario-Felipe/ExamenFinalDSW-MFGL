"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const value_object_1 = require("../../shared/value-object");
class Categoria extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('La categoria no puede estar vacia');
        }
        if (trimmed.length > 50) {
            throw new Error('La categoria es demasiado larga');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Categoria = Categoria;
//# sourceMappingURL=categoria.vo.js.map