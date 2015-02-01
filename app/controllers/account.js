var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , User = mongoose.model('User')
  , passport = require('passport')
  ;

module.exports = function (app) {
  app.use('/', router);
};

router.get('/signup', function (req,res,next) {
  res.render('signup', {title: 'Sign up'})
});

router.post('/signup', function (req,res,next) {
  var u = new User({
    username: req.body.username,
    password: req.body.password
  }).save(function(err){console.log(err)});
});

router.get('/login', function (req, res, next) {
  res.render('login')
});

router.post('/login', function (req, res, next) {
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true });
});

router.get('/logout', function (req, res){
  req.logout();
  res.redirect('/');
});
