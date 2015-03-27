var koa = require('koa');
var app = koa();
var http = require('http');

http.createServer(app.callback()).listen(3000);
