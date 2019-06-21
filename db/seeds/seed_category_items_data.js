
exports.seed = function(knex, Promise) {
      return Promise.all([
        // Deletes ALL existing entries
        knex('category').del(),
        knex('items').del(),

        // Inserts seed entries
        knex('category').insert({id: 1, name: 'Pizza'}),
        knex('category').insert({id: 2, name: 'Pasta'}),
        knex('category').insert({id: 3, name: 'Burger'}),
        knex('category').insert({id: 5, name: 'Wings'}),
        knex('category').insert({id: 4, name: 'Pop'}),



        knex('items').insert({name: 'Buffalo Chicken', category_id: 1, price: 11.99}),
        knex('items').insert({name: 'Chipotle Chicken', category_id: 1, price: 12.39}),
        knex('items').insert({name: 'Chipotle Steak', category_id: 1, price: 12.99}),
        knex('items').insert({name: 'Meat Supreme', category_id: 1, price: 12.29}),
        knex('items').insert({name: 'Garden Veggie', category_id: 1, price: 12.49}),
        knex('items').insert({name: 'Tropical Hawaiian', category_id: 1, price: 12.59}),
        knex('items').insert({name: 'Pepperoni', category_id: 1, price: 12.19}),
        knex('items').insert({name: 'Cheesy Delight', category_id: 1, price: 12.79}),
        knex('items').insert({name: 'Hot and Spicy', category_id: 1, price: 12.89}),
        knex('items').insert({name: 'Alfredo', category_id: 2, price: 10.29}),
        knex('items').insert({name: 'Penne', category_id: 2, price: 10.39}),
        knex('items').insert({name: 'Spaghetti', category_id: 2, price: 9.69}),
        knex('items').insert({name: 'Fettucine', category_id: 2, price: 11.89}),
        knex('items').insert({name: 'Chicken Burger', category_id: 3, price: 8.49}),
        knex('items').insert({name: 'Beef Burger', category_id: 3, price: 9.49}),
        knex('items').insert({name: 'Pulled Pork Burger', category_id: 3, price: 8.49}),
        knex('items').insert({name: 'Veggie Burger', category_id: 3, price: 6.49}),
        knex('items').insert({name: 'Spicy Wings', category_id: 5, price: 7.99}),
        knex('items').insert({name: 'Buffalo Wings', category_id: 5, price: 8.99}),
        knex('items').insert({name: 'Barbeque Wings', category_id: 5, price: 9.49}),
        knex('items').insert({name: 'Chipotle Wings', category_id: 5, price: 9.49}),
        knex('items').insert({name: 'Honey Glazed Wings', category_id: 5, price: 9.49}),
        knex('items').insert({name: 'Coca cola', category_id: 4, price: 1.49}),
        knex('items').insert({name: 'Sprite', category_id: 4, price: 1.49}),
        knex('items').insert({name: 'Iced tea', category_id: 4, price: 1.49}),
        knex('items').insert({name: 'Cold Coffee', category_id: 4, price: 1.49}),
        knex('items').insert({name: 'Orange Juice', category_id: 4, price: 1.49}),
        knex('items').insert({name: 'Ginger Ale', category_id: 4, price: 1.49}),
        knex('items').insert({name: 'Gatorade', category_id: 4, price: 1.49}),
        knex('items').insert({name: 'Water', category_id: 4, price: 1.49}),

      ]);
};
