const config = {
  dev: {
    API: 'http://220.181.38.148',
  },
  pre: {
    API: 'http://220.181.38.148',
  },
  production: {
    API: 'http://220.181.38.148',
  },
};
const finalConfig = config[process.env.API_ENV] || config.dev;

// 因为next.config.js引入此模块，所以这里不用es6的export
module.exports = finalConfig;
