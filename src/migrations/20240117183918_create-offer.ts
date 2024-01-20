import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('offers', function (table) {
		table.uuid('id', { primaryKey: true }).defaultTo(knex.raw('uuid_generate_v4()'))
		table.string('description', 255).notNullable()
		table.integer('price').notNullable()
		table.integer('ad_id').notNullable()
		table.dateTime('deadline').notNullable()
		table.boolean('is_view').defaultTo(false)
		table.boolean('is_best').defaultTo(false)
		table.timestamps(true, true)
		table.dateTime('deleted_at')
	})
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('offers')
}
