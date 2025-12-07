import { ValueObject } from '../../shared/value-object';

interface NombreProps {
  value: string;
}

export class Nombre extends ValueObject<NombreProps> {
  protected readonly props: NombreProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El nombre no puede estar vacio');
    }
    if (trimmed.length > 100) {
      throw new Error('El nombre es demasiado largo');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
