import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('ads', function (table) {
		table.uuid('id', { primaryKey: true }).defaultTo(knex.raw('uuid_generate_v4()'))
		table.string('title', 255).notNullable()
		table.string('description', 255).notNullable()
		table.uuid('category_id').unsigned().references('id').inTable('ad_categories').notNullable()
		table.dateTime('expired_date')
		table.timestamps(true, true)
		table.dateTime('deleted_at')
	})
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('ads')
}
