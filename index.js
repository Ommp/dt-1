const http = require('http');
const https = require('https');



const Koa = require('koa');
const app = new Koa();
const Router = require('@koa/router');
const { bodyParser } = require("@koa/bodyparser");
const views = require('koa-views');
const render = views(__dirname + '/views', { extension: 'nunjucks' });


const HTTP_PORT = 3002;
const HTTPS_PORT = 3003;

const router = new Router();

app.use(render);

router.get('/', (ctx, next) => {
//   ctx.body = "Hjem";
    console.log(__dirname + '/views/index.html');
    ctx.render(__dirname + '/views/index.html');
  
});
router.get('/webutvikling', (ctx, next) => {
  ctx.body = "Webutvikling";
});
router.get('/prosjekter', (ctx, next) => {
  ctx.body = "Prosjekter";
});


app
.use(router.routes())
.use(router.allowedMethods)
.use(bodyParser);   


// app.listen(PORT);
http.createServer(app.callback()).listen(HTTP_PORT);
https.createServer(app.callback()).listen(HTTPS_PORT);

console.log(`Running http on port ${HTTP_PORT} and https on port ${HTTPS_PORT}`);