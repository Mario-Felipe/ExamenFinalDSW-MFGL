import { ValueObject } from '../../shared/value-object';
interface EmpresaProps {
    value: string;
}
export declare class Empresa extends ValueObject<EmpresaProps> {
    protected readonly props: EmpresaProps;
    constructor(value: string);
    get value(): string;
}
export {};
