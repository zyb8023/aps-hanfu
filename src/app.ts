import * as Koa from 'koa';
import { route } from './route';
import * as color from 'colors';

const app = new Koa();

app.use(route);

app.listen(3000);

console.log(color.green('Server running on port 3000'));