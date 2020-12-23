import * as Router from 'koa-router';
import { LoginController } from '../controller';
const router = new Router();

router.get('/', LoginController);

export const route = router.routes();
