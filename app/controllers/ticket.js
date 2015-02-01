var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , Ticket = mongoose.model('Ticket')
  ;

module.exports = function (app) {
  app.use('/', router);
};

router.get('/tickets', function(req, res, next) {
  // get a list of tickets for a user
  Ticket.find(function(err, tickets) {
    var t = tickets;
    res.render('ticket-list', {title: 'Tickets', tickets: t});
  });
});

router.get('/tickets/:id', function (req,res,next) {
  // view a ticket in detail
  var t = Ticket.findById(req.params.id, function(){})
  res.render('index', {title: 'Ticket Detail'})
});

router.get('/tickets/:id/delete', function (req,res,next) {
  // delete a ticket confirmation
  res.render('index', {title: 'Ticket Detail'})
});

router.post('/tickets/:id/delete', function (req,res,next) {
  // delete a ticket
  res.render('index', {title: 'Ticket Detail'})
});

router.post('/tickets/:id', function (req,res,next) {
  // update a ticket
  res.render('index', {title: 'Ticket Detail'})
});

router.get('/tickets/new', function(req, res, next) {
  // render the new ticket form
  res.render('index', {title: 'Tickets'});
});

router.post('/tickets/new', function(req, res, next) {
  // create a ticket
  res.render('index', {title: 'Tickets'});
});