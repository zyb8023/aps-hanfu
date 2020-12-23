"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("../../lib/mysql");
const LoginController = async (ctx) => {
    const sql = 'select * from user_info';
    const result = mysql_1.default(sql);
    console.log(result, 'result');
    ctx.body = result;
};
exports.default = LoginController;
//# sourceMappingURL=Login.js.map