  exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('order_items', function(table){
      table.increments('id').primary();
      table.integer('item_id');
      table.foreign('item_id').references('items.id');
      table.string('item_name');
      table.float('real_price');
      })
    ])
  };
  
  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('order_items')
    ])
  };