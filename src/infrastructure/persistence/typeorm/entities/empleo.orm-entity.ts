import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'empleos' })
export class EmpleoOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'nombre', length: 100 })
  nombre!: string;

  @Column({ name: 'categoria', length: 50 })
  categoria!: string;

  @Column({ name: 'area_trabajo', length: 100 })
  areaTrabajo!: string;

  @Column({ name: 'empresa', length: 100 })
  empresa!: string;

  @Column({ name: 'nivel', length: 50 })
  nivel!: string;

  @Column({ name: 'sueldo', type: 'numeric', precision: 18, scale: 2 })
  sueldo!: number;

  @Column({ name: 'funciones', length: 2000 })
  funciones!: string;

  @Column({ name: 'cargo_jefe', length: 100 })
  cargoJefe!: string;

  @Column({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt!: Date;

  @Column({ name: 'updated_at', type: 'timestamp with time zone', nullable: true })
  updatedAt?: Date | null;
}
