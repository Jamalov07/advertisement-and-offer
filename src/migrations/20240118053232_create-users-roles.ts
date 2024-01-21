import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('users_roles', function (table) {
		table.uuid('id', { primaryKey: true }).defaultTo(knex.raw('uuid_generate_v4()'))
		table.uuid('user_id').unsigned().references('id').inTable('users').notNullable()
		table.uuid('role_id').unsigned().references('id').inTable('roles').notNullable()
		table.timestamps(true, true)
		table.dateTime('deleted_at')
	})
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('users_roles')
}
