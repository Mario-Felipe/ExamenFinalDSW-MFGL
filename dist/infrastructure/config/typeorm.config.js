"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTypeOrmConfig = void 0;
const user_orm_entity_1 = require("../persistence/typeorm/entities/user.orm-entity");
const token_blacklist_orm_entity_1 = require("../persistence/typeorm/entities/token-blacklist.orm-entity");
const empleo_orm_entity_1 = require("../persistence/typeorm/entities/empleo.orm-entity");
const DEFAULT_DATABASE_URL = 'postgresql://mgoenaga:mgoenaga123@144.22.48.194:5432/mgoenaga_software';
const buildTypeOrmConfig = (config) => ({
    type: 'postgres',
    url: config.get('DATABASE_URL', DEFAULT_DATABASE_URL),
    entities: [user_orm_entity_1.UserOrmEntity, empleo_orm_entity_1.EmpleoOrmEntity, token_blacklist_orm_entity_1.TokenBlacklistOrmEntity],
    synchronize: false,
    logging: config.get('TYPEORM_LOGGING', 'false') === 'true',
});
exports.buildTypeOrmConfig = buildTypeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map