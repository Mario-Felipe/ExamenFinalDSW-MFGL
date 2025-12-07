import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserOrmEntity } from '../persistence/typeorm/entities/user.orm-entity';
import { TokenBlacklistOrmEntity } from '../persistence/typeorm/entities/token-blacklist.orm-entity';
import { EmpleoOrmEntity } from '../persistence/typeorm/entities/empleo.orm-entity';

const DEFAULT_DATABASE_URL =
  'postgresql://mgoenaga:mgoenaga123@144.22.48.194:5432/mgoenaga_software';

export const buildTypeOrmConfig = (config: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  url: config.get<string>('DATABASE_URL', DEFAULT_DATABASE_URL),
  entities: [UserOrmEntity, EmpleoOrmEntity, TokenBlacklistOrmEntity],
  synchronize: false, // respetar esquema existente
  logging: config.get<string>('TYPEORM_LOGGING', 'false') === 'true',
});
