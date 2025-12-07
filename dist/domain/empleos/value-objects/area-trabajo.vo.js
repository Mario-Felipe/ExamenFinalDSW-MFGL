"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaTrabajo = void 0;
const value_object_1 = require("../../shared/value-object");
class AreaTrabajo extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El area de trabajo no puede estar vacia');
        }
        if (trimmed.length > 100) {
            throw new Error('El area de trabajo es demasiado larga');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.AreaTrabajo = AreaTrabajo;
//# sourceMappingURL=area-trabajo.vo.js.map