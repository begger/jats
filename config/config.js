var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'jats'
    },
    port: 3000,
    db: 'mongodb://localhost:27017/jats-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'jats'
    },
    port: 3000,
    db: 'mongodb://localhost:27017/jats-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'jats'
    },
    port: 3000,
    db: 'mongodb://localhost/jats-production'
  }
};

module.exports = config[env];
