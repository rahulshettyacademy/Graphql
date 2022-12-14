import { joiStringInteger } from "@utils/joi"
import Joi from "joi"

export interface IEnvironmentVariables{
    databaseHost: string
    databaseName: string
    databasePassword: string
    databasePort: string
    databaseSSL: boolean
    databaseUser: string
    depthLimit?: string
    graphqlUi: boolean
    nodeEnv: string
    loggerlevel: string
    migrateDatabase: boolean
    port: string
    rootPath: string
}

export const environmentSchema = Joi.object().keys({
    DATABASE_HOST: Joi.string().required(),
    DATABASE_NAME: Joi.string().required(),
    DATABASE_PASSWORD: Joi.string().required(),
    DATABASE_PORT: Joi.string().required(),
    DATABASE_SSL: Joi.string().required(),
    DATABASE_USER: Joi.string().required(),
    DEPTH_LIMIT: joiStringInteger().optional().allow(''),
    GRAPHQL_UI: Joi.string().required(),
    LOGGER_LEVEL: Joi.string().required(),
    MIGRATE_DATABASE: Joi.string().required(),
    NODE_ENV: Joi.string().required(),
    PORT: Joi.string().required(),
    ROOT_PATH: Joi.string().optional().allow('').default('')
}).unknown()