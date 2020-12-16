import * as koa from "koa";
import koaBody from "koa-body";

const Koa = require('koa');

const app = new Koa();

app.use(async(ctx: koa.BaseContext) => {
    ctx.body = 'qqqqqq';
})

app.listen(3000, () => {
    console.log('server srart at 3000')
})