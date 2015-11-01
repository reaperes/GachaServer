'use strict';
var bookshelf = require('../global').bookshelf;


bookshelf.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    bookshelf.knex.schema.createTable('users', function (table) {
      table.increments('id');
      table.string('fbId');
      table.string('fbToken');
      table.timestamps();
    }).then(function () {
      console.log('users table has created.');
    });
  }
});
