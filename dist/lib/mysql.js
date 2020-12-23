"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
const config_1 = require("../config");
const pool = mysql.createPool(config_1.mysqlConfig);
const connectSql = (sql, value) => {
    pool.getConnection((err, connection) => {
        if (err)
            throw err;
        connection.query(sql, value, (error, results, fields) => {
            if (error)
                throw error;
            console.log(results);
            return results;
        });
    });
};
exports.default = connectSql;
//# sourceMappingURL=mysql.js.map