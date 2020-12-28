import { register } from '../../service/register';
const RegisterController = async (ctx, next) => {
  await next();
  const request = ctx.request;
  let {userName, userPwd, userphone, userSex } = request.body;
  let result = await register({userName, userPwd, userphone, userSex});
  
  ctx.body = result;
}

export default RegisterController;
