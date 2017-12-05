import winston from 'winston';

// 定义个logger实例
const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      json: true,
      colorize: true
    })
  ]
});

export default logger;
