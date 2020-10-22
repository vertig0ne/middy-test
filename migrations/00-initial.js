export const up = (knex) => {
  knex.schema.createTable('data', (table) => {
    table.increments('_id').primary()
    table.string('data')
  })
  return knex
}

export const down = (knex) => {
  knex.schema.dropTable('data')
  return knex
}
