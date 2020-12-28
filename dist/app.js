"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const route_1 = require("./route");
const color = require("colors");
const koaBody = require("koa-body");
const app = new Koa();
app.use(koaBody());
app.use(route_1.default.routes());
app.on('error', (error) => {
    console.log(error);
});
app.listen(3000, () => {
    console.log(color.green('Server running on port 3000'));
});
//# sourceMappingURL=app.js.map