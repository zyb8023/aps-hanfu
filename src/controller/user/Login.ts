import * as Koa from 'koa';
import connectSql from '../../lib/mysql';
const LoginController = async (ctx:Koa.BaseContext) => {
  const sql = 'select * from user_info';
  const result = connectSql(sql)
  console.log(result, 'result');
  ctx.body = result;
}

export default LoginController;
