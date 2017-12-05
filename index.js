import mongoose from 'mongoose';
import util from 'util';

// 首先加载配置
import config from './config/config';
import app from './config/express';

const debug = require('debug')('express-mongoose-es6-rest-api:index');

// 将bluebird的promise库给mongoose
Promise = require('bluebird');
mongoose.Promise = Promise;

// 连接mongodb
const mongoUri = config.mongo.host;
console.log('mongoUri' + mongoUri);
mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});


// 在开发模式下打印mongoose的日志
if (config.MONGOOSE_DEBUG) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}

// 根据module.parent来确定是否需要启动mocha的watch
if (!module.parent) {
  // 监听端口
  app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`);
  });
}

export default app;
