'use strict';
const config = require('./config');
const knex = require('knex')(config.mysql);
const bookshelf = require('bookshelf')(knex);

module.exports = {
  bookshelf: bookshelf
};