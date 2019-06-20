
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('category', function(table){
      // table.increments('id').primary();
      table.integer('id').primary();
      table.string('name');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('category')
  ])
};
