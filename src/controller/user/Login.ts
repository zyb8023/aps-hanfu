import * as Koa from 'koa';
import connectSql from '../../lib/mysql';
const LoginController = async (ctx) => {


  const sql = 'select * from user_info where ?';
  try {
    const result = await connectSql(sql, { user_name: 'admin' });
    ctx.body = ctx.req;
  } catch (error) {
    ctx.body = {
      code: 500,
      message: error
    };
  }
}

export default LoginController;
