import 'dotenv/config'
import { basename, dirname } from 'path'

export interface DatabaseConfigOptions {
	database: string
	user: string
	password: string
	host: string
	port: number
	filename?: string
}

export interface DatabaseMigrationOptions {
	tableName: string
	directory: string
}

export interface DatabasePoolOptions {
	min: number
	max: number
}

export const databaseCofigOptions: DatabaseConfigOptions = {
	host: process.env.DB_HOST ?? 'postgres',
	port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
	user: process.env.DB_USER ?? 'postgres',
	password: process.env.DB_PASSWORD ?? 'postgres',
	database: process.env.DB_DATABASE ?? 'postgres',
	filename: './migrations.sql',
}

export const databaseMigrationOptions: DatabaseMigrationOptions = {
	tableName: process.env.MG_TABLENAME ?? 'migrations_table',
	directory: process.env.MG_DIRECTORY ?? undefined,
}

console.log(databaseMigrationOptions)

export const databasePoolOptions: DatabasePoolOptions = {
	min: process.env.DB_POOL_MIN ? parseInt(process.env.DB_POOL_MIN) : 1,
	max: process.env.DB_POOL_MAX ? parseInt(process.env.DB_POOL_MAX) : 5,
}
