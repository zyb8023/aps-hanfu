import * as Koa from 'koa';
import router from './route';
import * as color from 'colors';
import * as koaBody from 'koa-body';

const app = new Koa();

app.use(koaBody())
app.use(router.routes())

app.listen(3000, () => {
  console.log(color.green('Server running on port 3000'));
});
