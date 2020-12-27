// import * as Koa from 'koa';
import connectSql from '../../lib/mysql';
import { checkLogin } from '../../service/user';
const LoginController = async (ctx) => {
  const { userName, userPwd } = ctx.requset.body;
  let result = checkLogin(userName, userName);
  
}

export default LoginController;
