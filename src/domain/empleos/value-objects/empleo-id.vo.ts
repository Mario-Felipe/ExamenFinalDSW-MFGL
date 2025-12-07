import { randomUUID } from 'crypto';
import { ValueObject } from '../../shared/value-object';

interface EmpleoIdProps {
  value: string;
}

export class EmpleoId extends ValueObject<EmpleoIdProps> {
  protected readonly props: EmpleoIdProps;

  private constructor(value: string) {
    super();
    this.props = { value };
  }

  get value(): string {
    return this.props.value;
  }

  static new(): EmpleoId {
    return new EmpleoId(randomUUID());
  }

  static from(value: string): EmpleoId {
    return new EmpleoId(value);
  }
}
