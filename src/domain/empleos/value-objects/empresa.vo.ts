import { ValueObject } from '../../shared/value-object';

interface EmpresaProps {
  value: string;
}

export class Empresa extends ValueObject<EmpresaProps> {
  protected readonly props: EmpresaProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('La empresa no puede estar vacia');
    }
    if (trimmed.length > 100) {
      throw new Error('La empresa es demasiado larga');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
