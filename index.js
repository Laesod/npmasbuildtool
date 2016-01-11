const Koa = require('koa');
const app = module.exports = new Koa();
const convert = require('koa-convert');

//app.use(convert(function *(){
//	this.body = "Koa says Hi!";
//}));
//
app.use(ctx => {
  ctx.body = "Koa says Hi!";
});

var port = process.env.PORT || (process.argv[2] || 3000);

if(!module.parent) {
   app.listen(port);
}
console.log("Hello!!!");
console.log("Application started. Listening on port:" + port);
