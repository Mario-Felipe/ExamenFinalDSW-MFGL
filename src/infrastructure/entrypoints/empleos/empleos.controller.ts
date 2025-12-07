import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags, ApiOperation } from '@nestjs/swagger';
import {
  ICreateEmpleoUseCase,
  IDeleteEmpleoUseCase,
  IGetEmpleoByIdUseCase,
  IListEmpleosUseCase,
  IUpdateEmpleoUseCase,
} from '../../../application/empleos/ports/in/empleo.use-cases';
import { CreateEmpleoRequest } from './dto/create-empleo.request';
import { UpdateEmpleoRequest } from './dto/update-empleo.request';
import { CreateEmpleoCommand } from '../../../application/empleos/dto/command/create-empleo.command';
import { UpdateEmpleoCommand } from '../../../application/empleos/dto/command/update-empleo.command';
import { DeleteEmpleoCommand } from '../../../application/empleos/dto/command/delete-empleo.command';
import { GetEmpleoByIdQuery } from '../../../application/empleos/dto/query/get-empleo-by-id.query';
import { ListEmpleosQuery } from '../../../application/empleos/dto/query/list-empleos.query';
import { DomainExceptionFilter } from '../common/domain-exception.filter';

@ApiTags('empleos')
@Controller('empleos')
@UseFilters(new DomainExceptionFilter())
export class EmpleosController {
  constructor(
    private readonly createUseCase: ICreateEmpleoUseCase,
    private readonly updateUseCase: IUpdateEmpleoUseCase,
    private readonly deleteUseCase: IDeleteEmpleoUseCase,
    private readonly getByIdUseCase: IGetEmpleoByIdUseCase,
    private readonly listUseCase: IListEmpleosUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear empleo' })
  create(@Body() request: CreateEmpleoRequest) {
    const command = request as unknown as CreateEmpleoCommand;
    return this.createUseCase.execute(command);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener empleo por ID' })
  @ApiParam({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' })
  getById(@Param('id') id: string) {
    const query = new GetEmpleoByIdQuery();
    query.id = id;
    return this.getByIdUseCase.execute(query);
  }

  @Get()
  @ApiOperation({ summary: 'Listar empleos' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'pageSize', required: false, type: Number })
  @ApiQuery({ name: 'searchTerm', required: false, type: String })
  @ApiQuery({ name: 'categoria', required: false, type: String })
  @ApiQuery({ name: 'empresa', required: false, type: String })
  @ApiQuery({ name: 'nivel', required: false, type: String })
  @ApiQuery({ name: 'areaTrabajo', required: false, type: String })
  @ApiQuery({ name: 'minSueldo', required: false, type: Number })
  @ApiQuery({ name: 'maxSueldo', required: false, type: Number })
  list(
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10,
    @Query('searchTerm') searchTerm?: string,
    @Query('categoria') categoria?: string,
    @Query('empresa') empresa?: string,
    @Query('nivel') nivel?: string,
    @Query('areaTrabajo') areaTrabajo?: string,
    @Query('minSueldo') minSueldo?: string,
    @Query('maxSueldo') maxSueldo?: string,
  ) {
    const query = new ListEmpleosQuery();
    query.page = Number(page) || 1;
    query.pageSize = Number(pageSize) || 10;
    query.searchTerm = searchTerm;
    query.categoria = categoria;
    query.empresa = empresa;
    query.nivel = nivel;
    query.areaTrabajo = areaTrabajo;
    const min = minSueldo !== undefined ? Number(minSueldo) : undefined;
    const max = maxSueldo !== undefined ? Number(maxSueldo) : undefined;
    query.minSueldo = min !== undefined && !Number.isNaN(min) ? min : undefined;
    query.maxSueldo = max !== undefined && !Number.isNaN(max) ? max : undefined;
    return this.listUseCase.execute(query);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar empleo' })
  @ApiParam({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' })
  update(@Param('id') id: string, @Body() request: UpdateEmpleoRequest) {
    const command = request as unknown as UpdateEmpleoCommand;
    command.id = id;
    return this.updateUseCase.execute(command);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar empleo' })
  @ApiParam({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' })
  delete(@Param('id') id: string) {
    const command = new DeleteEmpleoCommand();
    command.id = id;
    return this.deleteUseCase.execute(command);
  }
}
