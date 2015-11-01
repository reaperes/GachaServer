'use strict';
var bookshelf = require('../global').bookshelf;


var User = {
  id: null,
  fbId: null,
  fbToken: null
};

module.exports = bookshelf.Model.extend({
  tableName: 'users'
});