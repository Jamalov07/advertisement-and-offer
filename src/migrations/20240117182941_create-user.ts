import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
	return knex.schema.createTable('users', function (table) {
		table.uuid('id', { primaryKey: true }).defaultTo(knex.raw('uuid_generate_v4()'))
		table.string('full_name', 50).notNullable()
		table.string('password').notNullable()
		table.string('email', 60).notNullable()
		table.timestamps(true, true)
		table.dateTime('deleted_at')
	})
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('users')
}
