import { ValueObject } from '../../shared/value-object';
interface EmpleoIdProps {
    value: string;
}
export declare class EmpleoId extends ValueObject<EmpleoIdProps> {
    protected readonly props: EmpleoIdProps;
    private constructor();
    get value(): string;
    static new(): EmpleoId;
    static from(value: string): EmpleoId;
}
export {};
