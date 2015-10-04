var app = require('koa')();
var router = require('koa-router')();

router.get('/', function *() {
  this.body = 'Hello world!';
});

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(8080);