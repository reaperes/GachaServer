'use strict';
const User = require('./user');


const save = function (user) {
  user.save().then(function (model) {
    console.log('save user ' + model);
  })
};

const findByFbId = function (fbId) {
  return new Promise(function (resolve, reject) {
    User
      .where({fbId: fbId})
      .fetch()
      .then(function (user) {
        resolve(user);
      });
  });
};

module.exports = {
  save: save,
  findByFbId: findByFbId
};