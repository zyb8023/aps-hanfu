"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
const config_1 = require("../config");
const connection = mysql.createPool(config_1.mysqlConfig);
//# sourceMappingURL=mysql.js.map