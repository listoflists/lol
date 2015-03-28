var koa = require('koa');
var app = koa();
var route = require('koa-route');
var serve = require('koa-static');
var logger = require('koa-logger');

app.use(serve('static'));
app.use(logger());
app.use(route.get('/ping', ping));

function *ping(){
  this.body = 'pong';
}

app.listen(3000);

