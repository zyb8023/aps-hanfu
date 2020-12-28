// import * as Koa from 'koa';
import { checkLogin } from '../../service/user';
const LoginController = async (ctx, next) => {
  await next();
  const request = ctx.request;
  let {userName,userPwd} = request.body;
  let result = await checkLogin(userName, userPwd);

  
  ctx.body = result;
}

export default LoginController;
