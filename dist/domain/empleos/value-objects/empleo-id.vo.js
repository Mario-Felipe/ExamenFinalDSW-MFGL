"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleoId = void 0;
const crypto_1 = require("crypto");
const value_object_1 = require("../../shared/value-object");
class EmpleoId extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        this.props = { value };
    }
    get value() {
        return this.props.value;
    }
    static new() {
        return new EmpleoId((0, crypto_1.randomUUID)());
    }
    static from(value) {
        return new EmpleoId(value);
    }
}
exports.EmpleoId = EmpleoId;
//# sourceMappingURL=empleo-id.vo.js.map