'use strict';
let https = require('https');
let app = require('koa')();
let bodyParser = require('koa-bodyparser');
let router = require('koa-router')();

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
    console.log('user id : ' + this.request.body.userId);
    console.log('access token : ' + this.request.body.accessToken);
    yield verify(this.request.body.accessToken)
      .then((statusCode) => {
        this.response.status = statusCode;
      });
};

router.post('/authenticate', authController);

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(8080);