"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const route_1 = require("./route");
const app = new Koa();
app.use(route_1.route);
app.listen(3000);
console.log('Server running on port 3000');
//# sourceMappingURL=app.js.map