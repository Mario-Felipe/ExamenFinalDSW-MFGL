import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmpleoRequest {
  @ApiProperty({ example: 'Analista de Sistemas' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre!: string;

  @ApiProperty({ example: 'Tecnología' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  categoria!: string;

  @ApiProperty({ example: 'Desarrollo de Software' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  areaTrabajo!: string;

  @ApiProperty({ example: 'Tech Solutions S.A.' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  empresa!: string;

  @ApiProperty({ example: 'Junior' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nivel!: string;

  @ApiProperty({ example: 2800000 })
  @IsNumber()
  sueldo!: number;

  @ApiProperty({ example: 'Analizar requerimientos, desarrollar módulos y dar soporte técnico.' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  funciones!: string;

  @ApiProperty({ example: 'Líder de Desarrollo' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  cargoJefe!: string;
}
