process.env.NODE_ENV = 'test';
require('../app/models/ticket')
require('../app')

var expect = require('chai').expect
  , mongoose = require('mongoose')
  , Ticket = mongoose.model('Ticket')
  ;

describe('Tickets', function(){

  it('Should create a ticket', function(done){
    var t = new Ticket({
      title: "Test",
      creator: "abcdefghijklmnopqrztuvwx",
      organization: "abcdefghijklmnopqrztuvwx"
    });
    t.save(function(err, ticket){
      expect(err).to.equal(null);
      expect(ticket._id.toString()).to.match(/[\w\d]{24}/);
      done();
    });
  });

});  