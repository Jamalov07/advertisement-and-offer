import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('permissions', function (table) {
		table.uuid('id', { primaryKey: true }).defaultTo(knex.raw('uuid_generate_v4()'))
		table.enum('method', ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']).notNullable()
		table.string('url', 100).notNullable()
		table.integer('role_id').notNullable()
		table.timestamps(true, true)
		table.dateTime('deleted_at')
	})
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('permissions')
}
