"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const user_1 = require("./user");
const banner_1 = require("./banner");
const router = new Router();
router.use(user_1.default.routes());
router.use(banner_1.default.routes());
exports.default = router;
//# sourceMappingURL=index.js.map