import { ValueObject } from '../../shared/value-object';

interface SueldoProps {
  value: number;
}

export class Sueldo extends ValueObject<SueldoProps> {
  protected readonly props: SueldoProps;

  constructor(value: number) {
    super();
    if (value === undefined || value === null || Number.isNaN(value)) {
      throw new Error('El sueldo es requerido');
    }
    if (value < 0) {
      throw new Error('El sueldo no puede ser negativo');
    }
    this.props = { value };
  }

  get value(): number {
    return this.props.value;
  }
}
