import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('messages', function (table) {
		table.uuid('id', { primaryKey: true }).defaultTo(knex.raw('uuid_generate_v4()'))
		table.uuid('from_user_id').unsigned().references('id').inTable('users').notNullable()
		table.uuid('to_user_id').unsigned().references('id').inTable('users').notNullable()
		table.string('message').notNullable()
		table.timestamps(true, true)
		table.dateTime('deleted_at')
	})
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('messages')
}
