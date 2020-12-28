"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as Koa from 'koa';
const user_1 = require("../../service/user");
const LoginController = async (ctx, next) => {
    await next();
    const request = ctx.request;
    let { userName, userPwd } = request.body;
    let result = await user_1.checkLogin(userName, userPwd);
    ctx.body = result;
};
exports.default = LoginController;
//# sourceMappingURL=Login.js.map