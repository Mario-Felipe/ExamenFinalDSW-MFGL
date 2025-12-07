import { ValueObject } from '../../shared/value-object';
interface SueldoProps {
    value: number;
}
export declare class Sueldo extends ValueObject<SueldoProps> {
    protected readonly props: SueldoProps;
    constructor(value: number);
    get value(): number;
}
export {};
