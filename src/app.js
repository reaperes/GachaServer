'use strict';
let app = require('koa')();
let bodyParser = require('koa-bodyparser');
let router = require('koa-router')();

app.use(bodyParser());

router.post('/authenticate', function *() {
  console.log('user name : ' + this.request.body.userName);
  console.log('access token : ' + this.request.body.accessToken);
  this.response.status = 200;
});

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(8080);