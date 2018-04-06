// Use as constant to describe available environment for the app
export const ENV = {
  DEFAULT: 'default',
  DEVELOPMENT: 'development',
  STAGING: 'staging',
  PREPRODUCTION: 'preproduction',
  PRODUCTION: 'production',
  TEST: 'test',
};
//
// let env;
// if (process.env.NODE_ENV === ENV.PRODUCTION && !process.env.NODE_PROFILES_ACTIVE) {
//   env = require('./env/production'); // eslint-disable-line global-require
// } else if (process.env.NODE_ENV === ENV.PREPRODUCTION || process.env.NODE_PROFILES_ACTIVE === ENV.PREPRODUCTION) {
//   env = require('./env/preproduction'); // eslint-disable-line global-require
// } else if (process.env.NODE_ENV === ENV.STAGING || process.env.NODE_PROFILES_ACTIVE === ENV.STAGING) {
//   env = require('./env/staging'); // eslint-disable-line global-require
// } else if (process.env.NODE_ENV === ENV.DEVELOPMENT || process.env.NODE_PROFILES_ACTIVE === ENV.DEVELOPMENT) {
//   env = require('./env/development'); // eslint-disable-line global-require
// } else if (process.env.NODE_ENV === ENV.TEST || process.env.NODE_PROFILES_ACTIVE === ENV.TEST) {
//   env = require('./env/test'); // eslint-disable-line global-require
// } else {
//   env = require('./env/default'); // eslint-disable-line global-require
// }

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  console.info('Loading', process.env.NODE_ENV, 'config'); // eslint-disable-line no-console
}
// export const pkg = require('../../package.json'); // eslint-disable-line global-require

// export const version = pkg.version;

// env specific configuration
// export const url = env.url;
// export const oAuthClient = env.oAuthClient;
