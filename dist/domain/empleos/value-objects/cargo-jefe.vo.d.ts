import { ValueObject } from '../../shared/value-object';
interface CargoJefeProps {
    value: string;
}
export declare class CargoJefe extends ValueObject<CargoJefeProps> {
    protected readonly props: CargoJefeProps;
    constructor(value: string);
    get value(): string;
}
export {};
