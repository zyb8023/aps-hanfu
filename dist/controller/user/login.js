"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("../../lib/mysql");
const LoginController = async (ctx) => {
    const sql = 'select * from user_info where ?';
    try {
        const result = await mysql_1.default(sql, { user_name: 'admin' });
        ctx.body = result;
    }
    catch (error) {
        ctx.body = {
            code: 500,
            message: error
        };
    }
};
exports.default = LoginController;
//# sourceMappingURL=Login.js.map