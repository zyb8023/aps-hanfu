"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const color = require("colors");
const koaBody = require("koa-body");
const cors = require("koa-cors");
const session = require("koa-session");
const log4_1 = require("./lib/log4");
const infoLog = log4_1.getLogger('info');
const route_1 = require("./route");
const app = new Koa();
app.keys = ['some secret hurr'];
const CONFIG = {
    key: 'setCookie',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
};
async function logger(ctx, next) {
    infoLog.info(ctx);
    next();
}
app.use(session(CONFIG, app));
app.use(cors());
app.use(koaBody());
app.use(route_1.default.routes());
app.use(logger);
app.on('error', (error) => {
    console.log(error);
});
app.listen(3000, () => {
    infoLog.info('1111111111111111');
    console.log(color.green('Server running on port 3000'));
});
//# sourceMappingURL=app.js.map