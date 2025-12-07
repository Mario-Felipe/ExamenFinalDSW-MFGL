import { ValueObject } from '../../shared/value-object';

interface CategoriaProps {
  value: string;
}

export class Categoria extends ValueObject<CategoriaProps> {
  protected readonly props: CategoriaProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('La categoria no puede estar vacia');
    }
    if (trimmed.length > 50) {
      throw new Error('La categoria es demasiado larga');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
