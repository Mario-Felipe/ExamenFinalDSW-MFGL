import { ValueObject } from '../../shared/value-object';
interface NivelProps {
    value: string;
}
export declare class Nivel extends ValueObject<NivelProps> {
    protected readonly props: NivelProps;
    constructor(value: string);
    get value(): string;
}
export {};
