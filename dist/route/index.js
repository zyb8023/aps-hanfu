"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const Router = require("koa-router");
const controller_1 = require("../controller");
const router = new Router();
router.get('/', controller_1.LoginController);
exports.route = router.routes();
//# sourceMappingURL=index.js.map