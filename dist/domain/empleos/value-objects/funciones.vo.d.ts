import { ValueObject } from '../../shared/value-object';
interface FuncionesProps {
    value: string;
}
export declare class Funciones extends ValueObject<FuncionesProps> {
    protected readonly props: FuncionesProps;
    constructor(value: string);
    get value(): string;
}
export {};
