var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  ;

var OrganizationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  avatar: Buffer,
  description: String,
  manager: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

OrganizationSchema.virtual('createdAt')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Organization', OrganizationSchema);