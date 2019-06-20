exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('items', function(table){
      table.float('price');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('items', function(table){
      table.dropColumns('price');
    })
  ])
};
