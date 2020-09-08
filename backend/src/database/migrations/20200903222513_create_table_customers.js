
exports.up = function(knex) {
  return knex.schema.createTable('customers', (table)=>{
      table.increments('id').notNullable()
      table.string('name').notNullable()
      table.string('phone').notNullable()
      table.string('cpf').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('customers')
};
