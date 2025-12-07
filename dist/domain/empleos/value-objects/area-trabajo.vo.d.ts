import { ValueObject } from '../../shared/value-object';
interface AreaTrabajoProps {
    value: string;
}
export declare class AreaTrabajo extends ValueObject<AreaTrabajoProps> {
    protected readonly props: AreaTrabajoProps;
    constructor(value: string);
    get value(): string;
}
export {};
