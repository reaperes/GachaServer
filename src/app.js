'use strict';
const https = require('https');
const app = require('koa')();
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();

const User = require('./model/user');
const userService = require('./model/user-service');

app.use(bodyParser());

let verify = function (accessToken) {
  return new Promise(function (resolve, reject) {
    https.get('https://graph.facebook.com/me?access_token=' + accessToken, response => {
      if (response.statusCode != 200) {
        console.error('Invalid access token - ' + accessToken);
      }
      resolve(response.statusCode);
    });
  })
};

let authController = function *() {
  var that = this;
  console.log('facebook id : ' + this.request.body.fbId);
  console.log('facebook access token : ' + this.request.body.fbToken);
  yield verify(this.request.body.fbToken)
    .then(userService.findByFbId(this.request.body.fbId))
    .then(function (user) {
      if (!user) {
        userService.save(new User({fbId: that.request.body.fbId, fbToken: that.request.body.fbToken}));
      }
      that.response.status = 200;
    });
};

router.post('/authenticate', authController);

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(8080);