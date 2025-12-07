import { ValueObject } from '../../shared/value-object';

interface AreaTrabajoProps {
  value: string;
}

export class AreaTrabajo extends ValueObject<AreaTrabajoProps> {
  protected readonly props: AreaTrabajoProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El area de trabajo no puede estar vacia');
    }
    if (trimmed.length > 100) {
      throw new Error('El area de trabajo es demasiado larga');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
