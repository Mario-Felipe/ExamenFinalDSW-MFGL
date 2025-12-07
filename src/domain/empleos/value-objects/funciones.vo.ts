import { ValueObject } from '../../shared/value-object';

interface FuncionesProps {
  value: string;
}

export class Funciones extends ValueObject<FuncionesProps> {
  protected readonly props: FuncionesProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('Las funciones no pueden estar vacias');
    }
    if (trimmed.length > 2000) {
      throw new Error('Las funciones son demasiado largas');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
