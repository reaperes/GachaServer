'use strict';
const Bookshelf = require('../global').Bookshelf;
const User = require('./user');

var Users = Bookshelf.Collection.extend({
  model: User
});

module.exports = Users;