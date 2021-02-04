import * as Koa from 'koa';
import * as color from 'colors';
import * as koaBody from 'koa-body';
import * as cors from 'koa-cors';
import * as session from 'koa-session';
import { getLogger } from './lib/log4';
const infoLog = getLogger('info');

import router from './route';



const app = new Koa();

app.keys = ['some secret hurr'];


const CONFIG = {
  key: 'setCookie',                        // cookie的键名
  maxAge: 86400000,                       // 过期时间，这里为一天的期限
  overwrite: true,                        // 是否覆盖cookie
  httpOnly: true,                         // 是否JS无法获取cookie
  signed: true,                           // 是否生成cookie的签名，防止浏览器暴力篡改
}

async function logger(ctx, next) {
  infoLog.info(ctx);
  next();
}

app.use(session(CONFIG, app));
app.use(cors())
app.use(koaBody())
app.use(router.routes())
app.use(logger);

app.on('error', (error) => {
  console.log(error);
})

app.listen(3000, () => {
  infoLog.info('1111111111111111')
  console.log(color.green('Server running on port 3000'));
});
