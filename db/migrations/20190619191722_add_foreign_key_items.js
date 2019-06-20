
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('items', function(table){
      table.integer('category_id');
      table.foreign('category_id').references('category.id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('items', function(table){
      table.dropColumn('category_id');
    })
  ])
};
