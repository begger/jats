var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  ;

var TicketSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: String,
  creator: {
    type: Schema.Types.ObjectId,
    required: true
  },
  assignee: [Schema.Types.ObjectId],
  priotity: {
    type: Number,
    min: 0,
    max: 11
  },
  dueDate: Date,
  timeRequired: Number,
  progress: {
    type: Number,
    min: 0,
    max: 1
  },
  comments: [String],
  links: [String],
  status: String,
  tags: [String],
  organization: {
    type: Schema.Types.ObjectId,
    required: true
  }


});

TicketSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Ticket', TicketSchema);