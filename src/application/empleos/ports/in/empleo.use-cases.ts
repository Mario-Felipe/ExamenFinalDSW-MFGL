import { CreateEmpleoCommand } from '../../dto/command/create-empleo.command';
import { DeleteEmpleoCommand } from '../../dto/command/delete-empleo.command';
import { UpdateEmpleoCommand } from '../../dto/command/update-empleo.command';
import { GetEmpleoByIdQuery } from '../../dto/query/get-empleo-by-id.query';
import { ListEmpleosQuery } from '../../dto/query/list-empleos.query';
import { EmpleoListResponse } from '../../dto/response/empleo-list.response';
import { EmpleoResponse } from '../../dto/response/empleo.response';

export abstract class ICreateEmpleoUseCase {
  abstract execute(command: CreateEmpleoCommand): Promise<EmpleoResponse>;
}

export abstract class IUpdateEmpleoUseCase {
  abstract execute(command: UpdateEmpleoCommand): Promise<EmpleoResponse>;
}

export abstract class IDeleteEmpleoUseCase {
  abstract execute(command: DeleteEmpleoCommand): Promise<void>;
}

export abstract class IGetEmpleoByIdUseCase {
  abstract execute(query: GetEmpleoByIdQuery): Promise<EmpleoResponse | null>;
}

export abstract class IListEmpleosUseCase {
  abstract execute(query: ListEmpleosQuery): Promise<EmpleoListResponse>;
}
