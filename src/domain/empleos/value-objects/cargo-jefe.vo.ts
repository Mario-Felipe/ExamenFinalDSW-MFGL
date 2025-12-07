import { ValueObject } from '../../shared/value-object';

interface CargoJefeProps {
  value: string;
}

export class CargoJefe extends ValueObject<CargoJefeProps> {
  protected readonly props: CargoJefeProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El cargo del jefe no puede estar vacio');
    }
    if (trimmed.length > 100) {
      throw new Error('El cargo del jefe es demasiado largo');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
