import * as mysql from 'mysql';
import { mysqlConfig } from '../config';

const connection = mysql.createPool(mysqlConfig);

