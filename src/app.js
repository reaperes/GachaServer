var app = require('koa')();

app.use(function *() {
  this.body = 'Hello World';
});

app.listen(8080);