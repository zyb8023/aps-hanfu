import * as Koa from 'koa';
import { getLogger } from '../../lib/log4';
import * as fs from 'fs';
import * as path from 'path';

const logger = getLogger();
const UploadBannerController = async (ctx: Koa.Context, next: Koa.Next) => {
  const file = ctx.request.files['']; // 获取上传文件
  logger.info(file.path)
    // 创建可读流
  const reader = fs.createReadStream(file.path);
  let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  ctx.body={
    code: 200,
    msg: 'success',
    data: {
      fileName: file.name,
    }
  }
}

export default UploadBannerController;
