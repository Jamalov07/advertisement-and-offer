import 'dotenv/config'

import { Knex } from 'knex'
import { databaseCofigOptions, databaseMigrationOptions, databasePoolOptions } from './src/configs/database.config'

interface KnexConfig {
	[key: string]: Knex.Config
}

const config: KnexConfig = {
	development: {
		client: 'postgresql',
		connection: process.env.DATABASE_URL || databaseCofigOptions,
		pool: databasePoolOptions,
		migrations: databaseMigrationOptions,
		useNullAsDefault: true,
		seeds: { directory: 'src/seeds' },
	},
	production: {
		client: 'postgresql',
		connection: databaseCofigOptions,
		pool: databasePoolOptions,
		migrations: databaseMigrationOptions,
		useNullAsDefault: true,
		seeds: { directory: 'src/seeds' },
	},
}

export default config
