
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', function(table){
      table.increments();
      table.string('contact_name');
      table.string('phone_number');
      table.string('contact_email');
      table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
