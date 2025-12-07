import { ValueObject } from '../../shared/value-object';

interface NivelProps {
  value: string;
}

export class Nivel extends ValueObject<NivelProps> {
  protected readonly props: NivelProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El nivel no puede estar vacio');
    }
    if (trimmed.length > 50) {
      throw new Error('El nivel es demasiado largo');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
