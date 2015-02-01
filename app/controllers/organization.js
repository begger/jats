var express = require('express')
  , router = express.Router()
  ;

module.exports = function (app) {
  app.use('/', router);
};

router.get('/organizations', function(req, res, next) {});
router.get('/organizations/:id', function(req, res, next) {});
router.post('/organizations/:id', function(req, res, next) {});
router.get('/organizations/:id/delete', function(req, res, next) {});
router.post('/organizations/:id/delete', function(req, res, next) {});
router.get('/organizations/new', function(req, res, next) {});
router.post('/organizations/new', function(req, res, next) {});