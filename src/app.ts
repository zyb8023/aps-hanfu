import * as Koa from 'koa';
import * as Router from 'koa-router';
import { route } from './route';

const app = new Koa();

app.use(route);

app.listen(3000);

console.log('Server running on port 3000');