'use strict';

exports.keys = '123456';

exports.redis = {
  clients: {
    foo: {
      port: 6379,
      host: '127.0.0.1',
      password: null,
      db: 0,
    },
    bar: {
      port: 6379,
      host: '127.0.0.1',
      password: null,
      db: 1,
    },
  },
};

exports.wechatApi = {
  default: {
  },
  app: true,
  agent: false,

  // wechat
  appId: process.env.WECHAT_API_APP_ID,
  appSecret: process.env.WECHAT_API_APP_SECRET,
  redisdb: process.env.REDIS_DB,
};
