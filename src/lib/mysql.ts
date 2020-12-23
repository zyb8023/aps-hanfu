import * as mysql from 'mysql';
import { mysqlConfig } from '../config';

const pool = mysql.createPool(mysqlConfig);

interface QueryValue {
    [key: string]: any,
}



const connectSql = (sql: string, value?: QueryValue ) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(sql, value, (error, results, fields) => {
            if(error) throw error;
            console.log(results);
            return results;
        })
    })
}





export default connectSql;


