import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('ad_files', function (table) {
		table.uuid('id', { primaryKey: true }).defaultTo(knex.raw('uuid_generate_v4()'))
		table.string('name', 255).notNullable()
		table.uuid('ad_id').unsigned().references('id').inTable('ads').notNullable()
		table.timestamps(true, true)
		table.dateTime('deleted_at')
	})
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('ad_files')
}
