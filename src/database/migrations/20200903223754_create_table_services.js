
exports.up = function(knex) {
  return knex.schema.createTable('services', (table)=>{
      table.increments('id').notNullable()
      table.datetime('hour').notNullable()
      table.integer('id_cliente').notNullable()
      table.foreign('id_cliente').references('customers.id')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('services')
};
